import { getActivities } from "@/lib/activities";
import { ActivityGrid } from "@/components/ActivityGrid";

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
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Activities
        </h1>
        <p className="mt-3 max-w-[700px] text-text-secondary">
          Five self-paced research activities. Each follows a 6-phase progressive unlock:
          Brief, Source Triage, Deep Research, Insight Framing, Deliverable, Debrief.
        </p>
      </div>

      <ActivityGrid activities={cards} domains={domains} />
    </div>
  );
}
