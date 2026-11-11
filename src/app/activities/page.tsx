import { getActivities } from "@/lib/activities";
import { ActivityGrid } from "@/components/ActivityGrid";

const PHASES = [
  { name: "Brief", time: "~3 min", label: "Frame the question" },
  { name: "Source Triage", time: "~5 min", label: "Audit the data" },
  { name: "Deep Research", time: "~8 min", label: "Interrogate evidence" },
  { name: "Insight Framing", time: "~5 min", label: "Sharpen the signal" },
  { name: "Deliver & Debrief", time: "~7 min", label: "Present and reflect" },
];

export default async function ActivitiesPage() {
  const activities = await getActivities();

  const cards = activities.map((a) => {
    const num = parseInt(a.config.id.replace("activity_", ""), 10);
    return {
      id: a.config.id,
      slug: a.config.slug,
      title: a.config.title,
      subtitle: a.config.subtitle,
      domain: a.config.domain,
      duration_minutes: a.config.duration_minutes,
      difficulty: a.config.difficulty,
      sort_order: num,
      deliverable: a.config.deliverable,
    };
  });

  const domains = [...new Set(cards.map((c) => c.domain))].sort();

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Activities
        </h1>
        <p className="mt-3 max-w-[680px] text-text-secondary">
          Each activity drops your team into a real-world research problem.
          Work through five phases together, using AI at each step, to produce a board-ready output in 35 minutes.
        </p>
      </div>

      {/* Research flow diagram */}
      <div className="mb-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
          The research flow you will practise
        </p>

        {/* Stepper */}
        <div className="relative">
          {/* Connecting line behind circles */}
          <div
            className="absolute left-[18px] right-[18px] top-[18px] h-px bg-border"
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="relative flex justify-between gap-2">
            {PHASES.map((phase, i) => (
              <div key={i} className="flex flex-1 flex-col items-center text-center min-w-0 px-1">
                {/* Numbered circle */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white ring-4 ring-surface">
                  {i + 1}
                </div>

                {/* Phase name */}
                <p className="mt-3 text-[13px] font-semibold leading-tight text-text-primary sm:text-sm">
                  {phase.name}
                </p>

                {/* Sub-label */}
                <p className="mt-1 hidden text-[11px] leading-snug text-text-muted sm:block">
                  {phase.label}
                </p>

                {/* Timing */}
                <span className="mt-1.5 inline-block rounded bg-surface-alt px-1.5 py-0.5 text-[11px] font-medium text-text-muted">
                  {phase.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs text-text-muted border-t border-border pt-4">
          Phases unlock one at a time. Each team moves at its own pace. Files are downloadable in Phase 2.
        </p>
      </div>

      <ActivityGrid activities={cards} domains={domains} />
    </div>
  );
}
