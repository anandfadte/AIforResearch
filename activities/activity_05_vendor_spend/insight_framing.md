# Insight Framing

> Turn your findings into a clear savings story. (~5 minutes)

## research_mode
Evidence Synthesis | Converting cost analysis into an actionable savings plan with quantified 90-day targets

## context

You now have data showing where the waste lives. Your job is to frame this as a clear story the CTO can act on — not a generic FinOps recommendation, but a specific savings plan with dollar amounts and timelines.

## do_this

1. **Distil your findings into 3 insights.** Each insight should follow this pattern: "[$XK/month] is wasted on [category] because [root cause]. This is [quick win / requires engineering / needs contract renegotiation] and can be captured in [timeframe]."
2. **Ask your AI tool to help you build a 90-day savings plan.** Upload your findings and ask: "Organise these savings into three waves: Week 1 (turn-off-now quick wins), Month 1 (right-sizing and configuration changes), Month 3 (contract renegotiations and architectural changes). What is the cumulative monthly savings at each milestone?"
3. **Challenge the plan.** If the AI puts all savings in Week 1, ask about implementation risk. Turning off resources without understanding dependencies can cause outages.

## prompting_guideline

Frame your insights as **"$X wasted because Y, action Z"** — the monthly cost, the root cause, the recommended action. Ask your AI tool: "For each waste category, draft a one-sentence insight statement that a CTO could read and immediately know what to turn off or change. Include the monthly dollar amount."

## tip

CTOs think in monthly burn rate, not annual totals. "$180K per month in orphaned resources" is more actionable than "$2.2M per year." Frame everything as monthly savings and cumulative 90-day impact.

## human_decision

Your group must decide the recommended sequence: what to turn off immediately, what to right-size next month, and what needs a longer-term plan. The AI can suggest, but your pod owns the recommendation.

## checkpoint

Read your three insights aloud. Would a CTO hearing them for the first time know exactly what to turn off and when? If not, sharpen them.
