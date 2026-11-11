"use client";

import { useState, useEffect, useRef } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  Lock,
  Eye,
  Lightbulb,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Shield,
  BarChart3,
  CheckCircle,
} from "lucide-react";

interface PhaseContent {
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

interface PhaseInfo {
  number: number;
  key: string;
  title: string;
  subtitle: string;
  content: PhaseContent;
}

interface DataFile {
  filename: string;
  display_name: string;
  type: string;
  role: string;
}

interface Props {
  slug: string;
  phases: PhaseInfo[];
  dataFiles: DataFile[];
  basePath: string;
  folderName: string;
  durationMinutes: number;
}

type PhaseStatus = "locked" | "active" | "complete";

export function ActivityPhases({ slug, phases, dataFiles, basePath, folderName, durationMinutes }: Props) {
  const [phaseStates, setPhaseStates] = useState<PhaseStatus[]>(() => {
    return phases.map((_, i) => (i === 0 ? "active" : "locked"));
  });
  const [revealOpen, setRevealOpen] = useState(false);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [timerSeconds, setTimerSeconds] = useState(durationMinutes * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`activity-progress-${slug}`);
      if (saved) {
        const parsed = JSON.parse(saved) as PhaseStatus[];
        if (Array.isArray(parsed) && parsed.length === phases.length) {
          setPhaseStates(parsed);
        }
      }
      const savedTimer = localStorage.getItem(`activity-timer-${slug}`);
      if (savedTimer) {
        const t = JSON.parse(savedTimer);
        if (t.seconds != null) setTimerSeconds(t.seconds);
        if (t.started) setTimerStarted(true);
      }
    } catch {}
  }, [slug, phases.length]);

  useEffect(() => {
    try {
      localStorage.setItem(`activity-progress-${slug}`, JSON.stringify(phaseStates));
    } catch {}
  }, [phaseStates, slug]);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        const next = prev - 1;
        try { localStorage.setItem(`activity-timer-${slug}`, JSON.stringify({ seconds: next, started: true })); } catch {}
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, slug]);

  function startTimer() {
    setTimerRunning(true);
    setTimerStarted(true);
  }

  function pauseTimer() {
    setTimerRunning(false);
  }

  function resetTimer() {
    setTimerRunning(false);
    setTimerStarted(false);
    setTimerSeconds(durationMinutes * 60);
    try { localStorage.removeItem(`activity-timer-${slug}`); } catch {}
  }

  function unlockNext(currentIndex: number) {
    setPhaseStates((prev) => {
      const next = [...prev];
      next[currentIndex] = "complete";
      if (currentIndex + 1 < next.length) {
        next[currentIndex + 1] = "active";
      }
      return next;
    });
    if (currentIndex + 1 < phases.length) {
      setTimeout(() => {
        phaseRefs.current[currentIndex + 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  function resetProgress() {
    setPhaseStates(phases.map((_, i) => (i === 0 ? "active" : "locked")));
    setRevealOpen(false);
    resetTimer();
    try { localStorage.removeItem(`activity-progress-${slug}`); } catch {}
    phaseRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const mins = Math.floor(Math.abs(timerSeconds) / 60);
  const secs = Math.abs(timerSeconds) % 60;
  const isOvertime = timerSeconds < 0;

  return (
    <div className="space-y-4">
      {/* Timer bar */}
      <div className={`sticky top-14 z-40 flex items-center justify-between rounded-xl border px-5 py-3 backdrop-blur-sm ${
        isOvertime
          ? "border-red-500/40 bg-red-900/20"
          : timerSeconds < 300
          ? "border-amber-500/40 bg-amber-900/10"
          : "border-border bg-surface/90"
      }`}>
        <div className="flex items-center gap-3">
          <Timer size={18} className={isOvertime ? "text-red-400" : "text-accent"} />
          <span className={`font-mono text-xl font-bold tabular-nums ${
            isOvertime ? "text-red-400" : timerSeconds < 300 ? "text-amber-400" : "text-text-primary"
          }`}>
            {isOvertime && "−"}{String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
          {isOvertime && <span className="text-xs font-medium text-red-400">OVERTIME</span>}
          {!isOvertime && timerSeconds < 300 && timerStarted && (
            <span className="text-xs font-medium text-amber-400">WRAPPING UP</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!timerStarted ? (
            <button
              onClick={startTimer}
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              <Play size={14} />
              Start Timer
            </button>
          ) : (
            <>
              <button
                onClick={timerRunning ? pauseTimer : startTimer}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-primary hover:bg-surface-alt transition-colors"
              >
                {timerRunning ? <Pause size={14} /> : <Play size={14} />}
                {timerRunning ? "Pause" : "Resume"}
              </button>
              <button
                onClick={resetTimer}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-muted hover:text-text-primary hover:bg-surface-alt transition-colors"
              >
                <RotateCcw size={14} />
              </button>
            </>
          )}
        </div>
      </div>

      {phases.map((phase, idx) => {
        const status = phaseStates[idx];
        const isLast = idx === phases.length - 1;

        return (
          <div
            key={phase.key}
            ref={(el) => { phaseRefs.current[idx] = el; }}
            className={`rounded-xl border transition-all ${
              status === "locked"
                ? "border-border/50 bg-surface/50 opacity-60"
                : status === "active"
                ? "border-accent/40 bg-surface shadow-sm"
                : "border-green-500/30 bg-surface"
            }`}
          >
            {/* Phase header */}
            <div className={`flex items-center gap-4 p-5 ${status !== "locked" ? "pb-3" : ""}`}>
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                  status === "complete"
                    ? "bg-green-500"
                    : status === "active"
                    ? "bg-accent"
                    : "bg-text-muted/30"
                }`}
              >
                {status === "complete" ? <Check size={18} /> : phase.number}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-lg font-semibold ${
                    status === "locked" ? "text-text-muted" : "text-text-primary"
                  }`}
                >
                  {phase.title}
                </h3>
                {phase.subtitle && (
                  <p className="text-sm text-text-muted mt-0.5">{phase.subtitle}</p>
                )}
              </div>
              <StatusBadge status={status} />
            </div>

            {/* Phase content - only visible when active or complete */}
            {status !== "locked" && (
              <div className="px-5 pb-5 space-y-5">
                {/* AI Research Mode badge */}
                {phase.content.researchMode && (
                  <ResearchModeBadge raw={phase.content.researchMode} />
                )}

                {/* Scenario box */}
                {phase.content.scenario && (
                  <div className="rounded-lg bg-slate-100 dark:bg-[#1a1a2e] border-l-4 border-l-accent p-5">
                    <div
                      className="prose text-slate-700 dark:text-gray-200 text-[15px] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: phase.content.scenario }}
                    />
                  </div>
                )}

                {/* Context */}
                {phase.content.context && (
                  <div
                    className="prose text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: phase.content.context }}
                  />
                )}

                {/* File download buttons */}
                {phase.content.files && phase.content.files.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {phase.content.files.map((filename) => {
                      const df = dataFiles.find((d) => d.filename === filename);
                      return (
                        <a
                          key={filename}
                          href={`${basePath}/activity-files/${folderName}/${filename}`}
                          download={filename}
                          className="inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-950/20 dark:bg-amber-950/20 px-4 py-2.5 text-sm font-medium text-text-primary hover:border-accent/50 hover:bg-accent/5 transition-colors"
                        >
                          <span className="font-mono text-xs">{filename}</span>
                          <Download size={14} className="text-text-muted" />
                        </a>
                      );
                    })}
                  </div>
                )}

                {/* Margin Bridge visual */}
                {phase.content.marginBridge && (
                  <MarginBridgeBox html={phase.content.marginBridge} />
                )}

                {/* Source Verification Lens */}
                {phase.content.sourceLens && (
                  <SourceLensCard raw={phase.content.sourceLens} />
                )}

                {/* Do this */}
                {phase.content.doThis && (
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-3">Do this</h4>
                    <div
                      className="prose text-text-secondary"
                      dangerouslySetInnerHTML={{ __html: phase.content.doThis }}
                    />
                  </div>
                )}

                {/* Prompting Guideline */}
                {phase.content.promptingGuideline && (
                  <PromptingGuidelineBox html={phase.content.promptingGuideline} />
                )}

                {/* Prompting Guideline 2 */}
                {phase.content.promptingGuideline2 && (
                  <PromptingGuidelineBox html={phase.content.promptingGuideline2} />
                )}

                {/* Tip */}
                {phase.content.tip && (
                  <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-950/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      <Lightbulb size={14} />
                      Tip
                    </div>
                    <div
                      className="prose text-emerald-900 dark:text-emerald-100 text-sm"
                      dangerouslySetInnerHTML={{ __html: phase.content.tip }}
                    />
                  </div>
                )}

                {/* Human Decision */}
                {phase.content.humanDecision && (
                  <div className="rounded-lg border-2 border-amber-300 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-950/40 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                      Human Decision Required
                    </div>
                    <div
                      className="prose text-amber-900 dark:text-amber-100 text-sm"
                      dangerouslySetInnerHTML={{ __html: phase.content.humanDecision }}
                    />
                  </div>
                )}

                {/* Checkpoint */}
                {phase.content.checkpoint && (
                  <div className="rounded-lg border-2 border-blue-300 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/40 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
                      Before You Move On
                    </div>
                    <div
                      className="prose text-blue-900 dark:text-blue-100 text-sm"
                      dangerouslySetInnerHTML={{ __html: phase.content.checkpoint }}
                    />
                  </div>
                )}

                {/* Reveal section — rendered on the last phase only */}
                {isLast && (phase.content.revealDistractors || phase.content.revealQuirks) && (
                  <div className="space-y-4">
                    <button
                      onClick={() => setRevealOpen(!revealOpen)}
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/50 px-5 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
                    >
                      <Eye size={16} />
                      {revealOpen ? "Hide the design" : "Reveal the design — only after your deliverable is done"}
                      {revealOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>

                    {revealOpen && (
                      <div className="space-y-5 rounded-lg border border-accent/20 bg-accent/5 p-5">
                        {phase.content.revealDistractors && (
                          <div>
                            <h4 className="text-base font-semibold text-text-primary mb-3">
                              Distractors in this activity
                            </h4>
                            <div
                              className="prose text-text-secondary text-sm"
                              dangerouslySetInnerHTML={{ __html: phase.content.revealDistractors }}
                            />
                          </div>
                        )}
                        {phase.content.revealQuirks && (
                          <div>
                            <h4 className="text-base font-semibold text-text-primary mb-3">
                              Data quirks you were meant to find
                            </h4>
                            <div
                              className="prose text-text-secondary text-sm"
                              dangerouslySetInnerHTML={{ __html: phase.content.revealQuirks }}
                            />
                          </div>
                        )}
                        {phase.content.revealInsightPath && (
                          <div>
                            <h4 className="text-base font-semibold text-text-primary mb-3">
                              The intended insight path
                            </h4>
                            <div
                              className="prose text-text-secondary text-sm"
                              dangerouslySetInnerHTML={{ __html: phase.content.revealInsightPath }}
                            />
                          </div>
                        )}
                        {phase.content.revealTakeaway && (
                          <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                            <h4 className="text-sm font-semibold text-accent mb-2">
                              Take it back to the day job
                            </h4>
                            <div
                              className="prose text-text-secondary text-sm"
                              dangerouslySetInnerHTML={{ __html: phase.content.revealTakeaway }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Unlock / Close button */}
                {status === "active" && (
                  <div className="pt-2">
                    {isLast ? (
                      <button
                        onClick={() => unlockNext(idx)}
                        className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
                      >
                        Close the sprint
                      </button>
                    ) : (
                      <button
                        onClick={() => unlockNext(idx)}
                        className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
                      >
                        Our pod has done this — unlock phase {phase.number + 1}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Reset button */}
      {phaseStates.some((s) => s === "complete") && (
        <div className="pt-4 text-center">
          <button
            onClick={resetProgress}
            className="text-sm text-text-muted hover:text-text-primary transition-colors underline underline-offset-2"
          >
            Reset progress
          </button>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: PhaseStatus }) {
  if (status === "locked") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-text-muted/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
        <Lock size={12} />
        Locked
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        In Progress
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
      <Check size={12} />
      Complete
    </span>
  );
}

function PromptingGuidelineBox({ html }: { html: string }) {
  return (
    <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50/50 dark:bg-amber-950/20 p-4">
      <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
        Prompting Guideline
      </div>
      <div
        className="prose text-slate-800 dark:prose-invert dark:text-gray-300 text-[15px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function ResearchModeBadge({ raw }: { raw: string }) {
  const parts = raw.split("|").map((s) => s.trim());
  const label = parts[0] || "";
  const description = parts[1] || "";

  return (
    <div className="rounded-lg border border-amber-500/30 bg-amber-950/10 dark:bg-amber-950/20 p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex items-center gap-1.5 rounded bg-amber-500/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Shield size={12} />
          AI Research Mode
        </span>
        <span className="text-sm font-semibold text-text-primary">{label}</span>
      </div>
      {description && (
        <p className="text-sm text-text-muted mt-1">{description}</p>
      )}
    </div>
  );
}

function MarginBridgeBox({ html }: { html: string }) {
  return (
    <div className="rounded-xl border border-teal-500/30 bg-teal-950/10 dark:bg-teal-950/30 p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-amber-500" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            What a Margin Bridge Looks Like (Plain-English Guide)
          </h4>
        </div>
        <span className="text-xs text-text-muted whitespace-nowrap ml-4">Target Deliverable</span>
      </div>
      <div
        className="prose text-text-secondary text-sm mb-5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="grid grid-cols-5 gap-2">
        <div className="rounded-lg bg-slate-200 dark:bg-slate-700 p-3 text-center">
          <div className="text-[11px] text-text-muted mb-1">Starting Margin</div>
          <div className="text-lg font-mono font-bold text-text-primary">43.0%</div>
          <div className="text-[11px] text-text-muted">Q2 Baseline</div>
        </div>
        <div className="rounded-lg bg-teal-100 dark:bg-teal-900/40 border border-teal-300 dark:border-teal-700 p-3 text-center">
          <div className="text-[11px] text-text-muted mb-1">Driver 1 (e.g. Mix)</div>
          <div className="text-lg font-mono font-bold text-red-600 dark:text-red-400">− ? pp</div>
          <div className="text-[11px] text-text-muted">Fixable / Structural?</div>
        </div>
        <div className="rounded-lg bg-teal-100 dark:bg-teal-900/40 border border-teal-300 dark:border-teal-700 p-3 text-center">
          <div className="text-[11px] text-text-muted mb-1">Driver 2 (e.g. Costs)</div>
          <div className="text-lg font-mono font-bold text-red-600 dark:text-red-400">− ? pp</div>
          <div className="text-[11px] text-text-muted">Fixable / Structural?</div>
        </div>
        <div className="rounded-lg bg-teal-100 dark:bg-teal-900/40 border border-teal-300 dark:border-teal-700 p-3 text-center">
          <div className="text-[11px] text-text-muted mb-1">Driver 3 (e.g. FX)</div>
          <div className="text-lg font-mono font-bold text-red-600 dark:text-red-400">− ? pp</div>
          <div className="text-[11px] text-text-muted">Fixable / Structural?</div>
        </div>
        <div className="rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 p-3 text-center">
          <div className="text-[11px] text-text-muted mb-1">Ending Margin</div>
          <div className="text-lg font-mono font-bold text-text-primary">40.5%</div>
          <div className="text-[11px] text-text-muted">Q4 (−2.5pp total)</div>
        </div>
      </div>
    </div>
  );
}

function SourceLensCard({ raw }: { raw: string }) {
  const items = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const pipeIdx = line.indexOf("|");
      if (pipeIdx === -1) return { title: line, description: "" };
      return {
        title: line.slice(0, pipeIdx).trim(),
        description: line.slice(pipeIdx + 1).trim(),
      };
    });

  return (
    <div className="rounded-xl border border-amber-500/30 bg-amber-950/5 dark:bg-amber-950/15 p-5">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle size={18} className="text-emerald-500" />
        <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary">
          3-Step Source Verification Lens
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg bg-slate-100 dark:bg-slate-800/60 p-4">
            <div className="font-semibold text-sm text-text-primary mb-1">{item.title}</div>
            <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
