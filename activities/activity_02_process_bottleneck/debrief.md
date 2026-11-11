# Debrief

> Score yourselves, then see how the activity was designed. (~5 minutes)

## research_mode
Reflective Practice | Examining which analytical habits delivered value and which would fail under real-world scrutiny

## context

**Share your deliverable** with the session facilitator for feedback. While you wait, reflect as a group.

## do_this

1. Discuss in your group:
   - Which data source did you trust the most? What earned that trust?
   - Where did the AI tool change your group's thinking? Where did you overrule it?
   - If you had one more hour, what would you verify first?

## tip

The reflection matters as much as the deliverable. In real operations work, the process you follow determines whether your fix actually works — not just whether the analysis looks right.

## reveal_distractors

**Ops Director Memo:** The memo blamed the carrier switch that happened in Month 2. This is partially true — the new carrier's average delivery time is 1.2 days longer. But the carrier switch only explains 1.2 of the 7 days. If your group anchored on "it's the carrier," the memo sent you down a path that explains only 17% of the problem.

## reveal_quirks

**182 orders with no "picked" timestamp** — these orders were fulfilled directly from a pop-up warehouse that bypasses the normal WMS. They have the fastest cycle times in the dataset but skew the "picking" stage average downward if not filtered out.

**Weekend orders are counted but the warehouse doesn't operate weekends** — if you calculated cycle time without accounting for non-working days, every order placed Friday evening appears to have a 2-day picking delay that is actually just the weekend.

## reveal_insight_path

The blowout is primarily a **handoff and queue time** story. Picking and packing times barely changed (+0.3 days). The real delay is in two places: (1) a 3.1-day queue between "packed" and "carrier pickup" caused by the new carrier's twice-weekly collection schedule (down from daily), and (2) a 2.4-day delay in order processing caused by a system migration that broke the auto-routing to warehouse 2, sending 80% of volume to warehouse 1. The fixable parts: restore daily carrier pickup (3.1 days recovered) and fix the routing logic (2.4 days recovered). Together, that gets you from 11 days back to roughly 5.5 days within 30 days.

## reveal_takeaway

Within the next 7 days, take one process from your day job — any workflow that has slowed down — and apply the same stage-by-stage decomposition with your AI tool. The technique of measuring delay by stage rather than looking at the end-to-end average will change what you find.
