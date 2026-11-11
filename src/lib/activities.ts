import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const ACTIVITIES_DIR = path.join(process.cwd(), "activities");

export interface DataFile {
  filename: string;
  display_name: string;
  type: string;
  role: "primary_data" | "supporting_source" | "distractor";
}

export interface ActivityConfig {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  duration_minutes: number;
  ai_tool: string;
  difficulty: string;
  phases: number;
  data_files: DataFile[];
  learning_objectives: string[];
  deliverable: string;
}

export interface PhaseContent {
  scenario?: string;
  context?: string;
  files?: string[];
  doThis?: string;
  promptingGuideline?: string;
  promptingGuideline2?: string;
  humanDecision?: string;
  checkpoint?: string;
  revealDistractors?: string;
  revealQuirks?: string;
  revealInsightPath?: string;
  revealTakeaway?: string;
  tip?: string;
  researchMode?: string;
  marginBridge?: string;
  sourceLens?: string;
}

export interface PhaseInfo {
  number: number;
  key: string;
  title: string;
  subtitle: string;
  content: PhaseContent;
}

export interface Activity {
  config: ActivityConfig;
  folderName: string;
  phases: PhaseInfo[];
}

const PHASE_FILES = [
  { key: "brief", file: "brief.md", number: 1, defaultTitle: "The Brief" },
  { key: "source_triage", file: "source_triage.md", number: 2, defaultTitle: "Source Triage" },
  { key: "deep_research", file: "deep_research.md", number: 3, defaultTitle: "Deep Research" },
  { key: "insight_framing", file: "insight_framing.md", number: 4, defaultTitle: "Insight Framing" },
  { key: "deliverable", file: "deliverable.md", number: 5, defaultTitle: "The Deliverable" },
  { key: "debrief", file: "debrief.md", number: 6, defaultTitle: "Debrief" },
];

async function mdToHtml(md: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(md);
  return result.toString();
}

function readFileIfExists(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

function parsePhaseMd(raw: string): { title: string; subtitle: string; sections: Record<string, string> } {
  const lines = raw.split("\n");
  let title = "";
  let subtitle = "";
  const sections: Record<string, string> = {};
  let currentSection = "";
  let currentLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith("# ") && !title) {
      title = line.replace("# ", "").trim();
      continue;
    }
    if (line.startsWith("> ") && !subtitle && !currentSection) {
      subtitle = line.replace("> ", "").trim();
      continue;
    }
    if (line.startsWith("## ")) {
      if (currentSection) {
        sections[currentSection] = currentLines.join("\n").trim();
      }
      currentSection = line.replace("## ", "").trim();
      currentLines = [];
      continue;
    }
    if (currentSection) {
      currentLines.push(line);
    }
  }
  if (currentSection) {
    sections[currentSection] = currentLines.join("\n").trim();
  }

  return { title, subtitle, sections };
}

function parseFilesList(raw: string): string[] {
  return raw
    .split("\n")
    .map((l) => l.replace(/^-\s*/, "").trim())
    .filter(Boolean);
}

async function convertSections(sections: Record<string, string>): Promise<PhaseContent> {
  const content: PhaseContent = {};

  if (sections.scenario) content.scenario = await mdToHtml(sections.scenario);
  if (sections.context) content.context = await mdToHtml(sections.context);
  if (sections.files) content.files = parseFilesList(sections.files);
  if (sections.do_this) content.doThis = await mdToHtml(sections.do_this);
  if (sections.prompting_guideline) content.promptingGuideline = await mdToHtml(sections.prompting_guideline);
  if (sections.prompting_guideline_2) content.promptingGuideline2 = await mdToHtml(sections.prompting_guideline_2);
  if (sections.human_decision) content.humanDecision = await mdToHtml(sections.human_decision);
  if (sections.checkpoint) content.checkpoint = await mdToHtml(sections.checkpoint);
  if (sections.reveal_distractors) content.revealDistractors = await mdToHtml(sections.reveal_distractors);
  if (sections.reveal_quirks) content.revealQuirks = await mdToHtml(sections.reveal_quirks);
  if (sections.reveal_insight_path) content.revealInsightPath = await mdToHtml(sections.reveal_insight_path);
  if (sections.reveal_takeaway) content.revealTakeaway = await mdToHtml(sections.reveal_takeaway);
  if (sections.tip) content.tip = await mdToHtml(sections.tip);
  if (sections.research_mode) content.researchMode = sections.research_mode;
  if (sections.margin_bridge) content.marginBridge = await mdToHtml(sections.margin_bridge);
  if (sections.source_lens) content.sourceLens = sections.source_lens;

  return content;
}

async function loadActivity(folderName: string): Promise<Activity> {
  const dir = path.join(ACTIVITIES_DIR, folderName);

  const configRaw = readFileIfExists(path.join(dir, "config.json"));
  if (!configRaw) throw new Error(`Missing config.json for ${folderName}`);
  const config: ActivityConfig = JSON.parse(configRaw);

  const phases: PhaseInfo[] = [];
  const phaseFilesToLoad = PHASE_FILES.slice(0, config.phases || PHASE_FILES.length);

  for (const pf of phaseFilesToLoad) {
    const raw = readFileIfExists(path.join(dir, pf.file));
    if (!raw) {
      phases.push({
        number: pf.number,
        key: pf.key,
        title: pf.defaultTitle,
        subtitle: "",
        content: {},
      });
      continue;
    }

    const { title, subtitle, sections } = parsePhaseMd(raw);
    const content = await convertSections(sections);

    phases.push({
      number: pf.number,
      key: pf.key,
      title: title || pf.defaultTitle,
      subtitle,
      content,
    });
  }

  return { config, folderName, phases };
}

export async function getActivities(): Promise<Activity[]> {
  const folders = fs
    .readdirSync(ACTIVITIES_DIR)
    .filter((entry) => {
      const full = path.join(ACTIVITIES_DIR, entry);
      return fs.statSync(full).isDirectory() && entry.startsWith("activity_");
    });

  const activities = await Promise.all(folders.map(loadActivity));
  return activities.sort((a, b) => {
    const numA = parseInt(a.config.id.replace("activity_", ""), 10);
    const numB = parseInt(b.config.id.replace("activity_", ""), 10);
    return numA - numB;
  });
}

export async function getActivityBySlug(slug: string): Promise<Activity | null> {
  const activities = await getActivities();
  return activities.find((a) => a.config.slug === slug) ?? null;
}

export async function getDomains(): Promise<string[]> {
  const activities = await getActivities();
  const domains = new Set(activities.map((a) => a.config.domain));
  return Array.from(domains).sort();
}
