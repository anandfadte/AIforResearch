"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Layers, RotateCcw } from "lucide-react";

interface ActivityCard {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  duration_minutes: number;
  difficulty: string;
  sort_order: number;
  deliverable: string;
}

export function ActivityGrid({
  activities,
  domains,
}: {
  activities: ActivityCard[];
  domains: string[];
}) {
  const [domainFilter, setDomainFilter] = useState("");

  const filtered = activities.filter((a) => {
    if (domainFilter && a.domain !== domainFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-accent focus:outline-none"
        >
          <option value="">All domains</option>
          {domains.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {domainFilter && (
          <button
            onClick={() => setDomainFilter("")}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        )}

        <span className="ml-auto text-sm text-text-muted">
          {filtered.length} activit{filtered.length === 1 ? "y" : "ies"}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/activities/${a.slug}`}
            className="group relative rounded-xl border border-border bg-surface p-5 transition-all hover:shadow-md hover:border-accent/50"
          >
            <div className="mb-3">
              <span className="text-3xl font-bold text-accent/80">
                {String(a.sort_order).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mb-2 text-base font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
              {a.title}
            </h3>

            <p className="mb-4 text-sm text-text-muted line-clamp-2">
              {a.subtitle}
            </p>

            <div className="mb-3 flex items-center gap-3 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1 rounded-md bg-surface-alt px-2 py-1 font-medium">
                <Layers size={12} />
                {a.domain}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {a.duration_minutes} min
              </span>
            </div>

            <div className="text-xs text-text-muted">
              <span className="font-medium">Deliverable:</span> {a.deliverable}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
