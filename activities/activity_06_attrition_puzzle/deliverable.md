# Deliver & Debrief

> Build the brief, present it, then see how the activity was designed. (~7 minutes)

## research_mode
Executive Communication | Translating evidence-backed analysis into a retention brief the CHRO can present to the board in 48 hours

## context

Your output is a one-page retention brief. Write it for someone who has 10 minutes before a board meeting — not for someone who wants to understand your methodology. The CHRO needs to know where the problem is concentrated, what is driving it, and what to do first.

## do_this

1. Brief your AI tool clearly: "Write a one-page retention brief for a CHRO board presentation. Tell the board where attrition is concentrated, what is driving it, what it is costing the company, and what the top recommendation is with its expected impact. Use only these insights: [paste your three insights]."
2. Review the first draft together. Revise specific parts — tighten the language, check that every number traces back to your data, and remove anything you cannot support with evidence.
3. Choose a presenter. That person shares the brief and names one thing the AI tool got wrong or missed during the activity.
4. After presenting, reflect as a group: which data source did you trust the most and why? Where did the AI change your thinking, and where did your group overrule it?

## prompting_guideline

Brief the AI the way you would brief a junior analyst: audience, the decision being supported, your three insights with evidence, and the exact format you need. Say explicitly: "Do not add any claims or numbers beyond what I have given you." Then iterate with specific instructions rather than starting over.

## human_decision

Your name goes on this brief, not the AI's. Before you present, every person in the group should read it once — critically, not just to check for typos.

## checkpoint

Could the CHRO take this into a board meeting and present it without asking you a single clarifying question? That is the standard.

## reveal_distractors

**CHRO_Email_Thread.docx:** The email correctly identifies a timing correlation — attrition did spike after the January return-to-office mandate. What it misses is that pay compression in Engineering had been building for 18 months before the mandate was introduced. When you look at attrition rates across the three location types in the data (remote, hybrid, in-office), the rates are statistically similar. The timing correlation is real, but it is coincidental. The CHRO is reading the data through the lens of her most recent operational decision. If your group followed this theory, you would have recommended a policy reversal that leaves the actual problem untouched.

## reveal_quirks

**183 employee records have a blank Manager_ID.** These are mostly contractors and employees from a legacy system that was never properly migrated. If you included them in department-level attrition calculations without noticing, some of your rates will be off.

**The Level field uses two different labels for the same seniority band.** Engineering uses "L3" while every other department uses "Mid-Senior" for the equivalent level. If you grouped attrition by level without standardising the labels first, you likely missed the Engineering signal entirely — the two groups would not have been counted together.

**The exit survey covers 198 of 240 leavers — an 83 percent response rate overall.** The 42 non-respondents are not evenly distributed: Engineering accounts for 61 percent of the non-responses. This means the survey data systematically under-represents the people most likely to have left for pay-related reasons, which makes "career growth" look even more dominant than it actually is.

## reveal_insight_path

The attrition problem is concentrated in Engineering at the mid-level. Employees who have been with the company between three and five years, sitting at the L3 level, leave at roughly two and a half times the rate of the company average. Pay compression is the root cause. Engineers hired three to five years ago earn around 87 percent of market midpoint. Engineers hired in the last 12 months earn at or above market. The company solved a hiring problem by paying new graduates competitively — but it never adjusted the salaries of the people who were already there, and those people noticed.

Three managers account for 38 percent of Engineering departures. The pay problem is structural and affects everyone in that cohort, but those three managers are amplifying it significantly. A retention strategy that only addresses compensation without looking at manager effectiveness will recover most of the problem but not all of it.

The exit survey says "career growth" is the top reason people leave. That is probably true in a narrow sense — when someone earning below market is offered a promotion and a pay rise at a competitor, they frame it as a career move. But the lever is compensation, not development programmes. Filtered to Engineering L3 specifically, compensation rises to the top reason given.

The 90-day fix is targeted equity adjustments for Engineering L3 employees hired more than two years ago. The estimated cost is around $680,000 in annual salary increases. The estimated cost of continuing to lose those engineers at the current rate is approximately $3.1 million in replacement costs per year, before accounting for productivity loss during ramp-up.

## reveal_takeaway

Within the next week, take one real retention or turnover question from your own organisation and run it through the same process. Even just the source triage step — asking who created each piece of data and whether they had a reason to interpret it a particular way — will change how you read the next HR report you receive.
