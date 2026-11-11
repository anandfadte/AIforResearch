# Deliver & Debrief

> Build the leakage report, present it, then see how the activity was designed. (~7 minutes)

## research_mode
Executive Communication | Packaging reconciliation findings into a board-ready leakage report with recovery priorities

## context

Your output is a one-page revenue leakage report. Write it for someone preparing for an earnings call, not someone who wants to understand your methodology. The CFO needs to know the total gap, what is driving it, how much is recoverable, and what to do first.

## do_this

1. Brief your AI tool clearly: "Create a one-page revenue leakage report for a CFO earnings prep. Show the $4.2M gap broken down by root cause. For each category, state the dollar amount, whether it is recoverable, and the recommended action. Include our top recommendation with expected recovery amount and timeline. Use our three insights: [paste your insights here]."
2. Review the first draft together. Revise specific parts: tighten the language, fix any numbers that do not match your reconciliation, and remove any claims you cannot support with evidence.
3. Choose a presenter. That person shares the report and names one thing the AI tool got wrong or missed during the activity.
4. After presenting, reflect as a group: which data source did you trust the most and why? Where did the AI change your thinking, and where did your group overrule it?

## prompting_guideline

Brief the AI the way you would brief a junior analyst: give it the audience, the decision being supported, your three insights with evidence, and the exact format you need. Say explicitly: "Do not add any claims or numbers beyond what I have given you." Then iterate with specific instructions rather than starting over. Your name goes on this report, not the AI's. Everyone in the group should read the final version once before it is presented.

## checkpoint

Could the CFO use this report to explain the revenue gap to analysts on the earnings call without asking you a single clarifying question? That is the standard.

## reveal_distractors

**Finance VP Email:** The email blamed account managers for "not submitting hours on time." This is true for about $380K of the gap (9%). The email takes a real but small problem and presents it as the explanation. If your group accepted the timesheet narrative, you missed the larger systemic causes.

## reveal_quirks

**47 delivery records with project codes that do not exist in the billing system.** These are projects from an acquisition completed 8 months ago. The acquired company's project codes were never migrated into the billing system. They represent $1.1M of the gap and are the single largest category, but only if you noticed the code mismatch.

**Three "premium support" service lines are billed quarterly in arrears, not monthly.** If you flagged these as unbilled, they are not actually leakage. They will appear on next quarter's invoices. This is roughly $420K that looks like leakage but is not.

## reveal_insight_path

The leakage breaks into three categories: unmigrated acquisition projects ($1.1M), where delivery records exist but project codes do not map to the billing system and the amount is fully recoverable once codes are mapped; scope creep on fixed-fee contracts ($1.6M), where additional work was delivered beyond contract scope and never change-ordered, which is partially recoverable and requires client conversations; and time-and-materials underreporting ($1.1M), where billable hours were recorded in the delivery system but not submitted to billing, primarily in two service lines with manual timesheet processes, which is recoverable with a process fix. The remaining $400K is timing (quarterly billing) and genuine write-offs.

## reveal_takeaway

Within the next 7 days, run one reconciliation from your day job, any pair of systems that should agree but might not, through the same profiling and matching process with your AI tool. The technique of systematic record matching will surface gaps you did not know existed.
