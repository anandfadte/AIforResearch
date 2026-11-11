import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Clock,
  Layers,
} from "lucide-react";
import { getActivities, getActivityBySlug } from "@/lib/activities";
import { ActivityPhases } from "@/components/ActivityPhases";

export async function generateStaticParams() {
  const activities = await getActivities();
  return activities.map((a) => ({ slug: a.config.slug }));
}

const basePath = process.env.NODE_ENV === "production" ? "/AIforResearch" : "";

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);
  if (!activity) notFound();

  const allActivities = await getActivities();
  const currentIndex = allActivities.findIndex(
    (a) => a.config.slug === slug
  );
  const prev = currentIndex > 0 ? allActivities[currentIndex - 1] : null;
  const next =
    currentIndex < allActivities.length - 1
      ? allActivities[currentIndex + 1]
      : null;

  const { config } = activity;
  const activityNum = parseInt(config.id.replace("activity_", ""), 10);

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10">
      {/* Breadcrumb */}
      <Link
        href="/activities"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
      >
        <ChevronLeft size={16} />
        Back to activities
      </Link>

      {/* Header */}
      <section className="mb-10">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          <span className="text-accent">
            {String(activityNum).padStart(2, "0")}.
          </span>{" "}
          {config.title}
        </h1>

        <p className="mb-6 text-lg text-text-secondary">{config.subtitle}</p>

        {/* Metadata strip */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 font-medium text-text-secondary">
            <Layers size={14} />
            {config.domain}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 text-text-secondary">
            <Clock size={14} />
            {config.duration_minutes} min
          </span>
          <span className="rounded-md bg-surface-alt px-3 py-1 text-text-muted">
            {config.ai_tool}
          </span>
          <span className="rounded-md bg-surface-alt px-3 py-1 text-text-muted">
            {config.difficulty}
          </span>
        </div>

        {/* Learning objectives */}
        <div className="rounded-xl border border-border bg-surface-alt p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
            What you will practice
          </h3>
          <ul className="space-y-1.5">
            {config.learning_objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Phases */}
      <section className="mb-10">
        <ActivityPhases
          slug={config.slug}
          phases={activity.phases}
          dataFiles={config.data_files}
          basePath={basePath}
          folderName={activity.folderName}
          durationMinutes={config.duration_minutes}
        />
      </section>

      {/* Previous / Next navigation */}
      <nav className="mt-16 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/activities/${prev.config.slug}`}
            className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            <div>
              <div className="text-xs text-text-muted">Previous</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(parseInt(prev.config.id.replace("activity_", ""), 10)).padStart(2, "0")}. {prev.config.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/activities/${next.config.slug}`}
            className="group flex items-center gap-2 text-right text-sm text-text-muted hover:text-accent transition-colors"
          >
            <div>
              <div className="text-xs text-text-muted">Next</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(parseInt(next.config.id.replace("activity_", ""), 10)).padStart(2, "0")}. {next.config.title}
              </div>
            </div>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
