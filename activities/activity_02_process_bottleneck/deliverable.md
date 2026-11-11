# Deliver & Debrief

> Build the bottleneck map, present it, then see how the activity was designed. (~7 minutes)

## research_mode
Executive Communication | Packaging process analysis into a board-ready bottleneck map with quantified fix priorities

## context

Your output is a one-page bottleneck map. Write it for someone who has 10 minutes before a board meeting. The COO needs to know which stage is broken, how many days it is adding, and what to do first within 30 days.

## do_this

1. Brief your AI tool with your three insights, the audience, and the output format. Use the prompting guideline below as your template.
2. Review the first draft as a group. Check every number traces to your data, tighten the language, cut anything you cannot support.
3. Choose a presenter and share the deliverable with the group.

Discuss as a group:
- Which source did you trust most? What earned that trust?
- Where did the AI change your thinking? Where did you overrule it?
- If you had one more hour, what would you verify first?

## prompting_guideline

Brief the AI the way you would brief a junior analyst: give it the audience, the decision being supported, your three insights with evidence, and the exact format you need. Say explicitly: "Do not add any claims or numbers beyond what I have given you." Then iterate with specific instructions rather than starting over. Your name goes on this analysis, not the AI's. Everyone in the group should read the final version once before it is presented.

## checkpoint

Could the COO take this into a board meeting and present it without asking you a single clarifying question? That is the standard.

## reveal_distractors

**Ops Director Memo:** The memo blamed the carrier switch that happened in Month 2. This is partially true: the new carrier's average delivery time is 1.2 days longer. But the carrier switch only explains 1.2 of the 7 days. If your group anchored on "it's the carrier," the memo sent you down a path that explains only 17% of the problem.

## reveal_quirks

**182 orders with no "picked" timestamp.** These orders were fulfilled directly from a pop-up warehouse that bypasses the normal WMS. They have the fastest cycle times in the dataset but skew the picking stage average downward if not filtered out.

**Weekend orders are counted but the warehouse does not operate weekends.** If you calculated cycle time without accounting for non-working days, every order placed Friday evening appears to have a 2-day picking delay that is actually just the weekend.

## reveal_insight_path

The blowout is primarily a handoff and queue time story. Picking and packing times barely changed (+0.3 days). The real delay is in two places: a 3.1-day queue between "packed" and "carrier pickup" caused by the new carrier's twice-weekly collection schedule (down from daily), and a 2.4-day delay in order processing caused by a system migration that broke the auto-routing to warehouse 2, sending 80% of volume to warehouse 1. The fixable parts: restore daily carrier pickup (3.1 days recovered) and fix the routing logic (2.4 days recovered). Together, that gets you from 11 days back to roughly 5.5 days within 30 days.

## reveal_takeaway

Pick one workflow from your own work that has slowed down. Apply the same stage-by-stage decomposition with your AI tool before the week is out. Measuring delay by stage, rather than looking at the end-to-end average, will show you where the problem actually lives.
