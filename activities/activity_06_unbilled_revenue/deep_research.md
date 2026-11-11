# Deep Research

> Find where the $4.2M leakage actually lives. (~8 minutes)

## research_mode
Analytical Deep-Dive | Reconciling delivery and billing records to quantify leakage by root cause category

## context

Now that you have profiled your sources, use your AI tool to conduct the reconciliation. Your goal is to categorise the $4.2M gap into distinct root causes and quantify each one.

## do_this

1. **Reconcile delivery against billing.** Ask your AI tool to match every delivery record to its corresponding invoice. Categorise unmatched records: Was the work delivered but never invoiced? Was it invoiced at a lower amount? Was it written off?
2. **Segment the leakage.** Break down by client, service line, and contract type. Is the leakage concentrated in a few large accounts, or spread evenly? Does it correlate with contract type (fixed-fee vs. time-and-materials)?
3. **Stress-test the AI's findings.** If the AI says "60% of leakage is from three clients," ask it to show you why — are those three clients genuinely under-billed, or is there a data matching issue?

## prompting_guideline

Ask your AI tool to **show its working** — not just conclusions. A good prompt: "For each unmatched delivery record, classify the likely reason: (A) never invoiced, (B) invoiced at lower amount, (C) contractual write-off, (D) data matching error. Show me the count and dollar value for each category. Then break down category A by client and service line."

## prompting_guideline_2

If the AI gives you a single root cause, push back: "What if I told you there are at least three distinct leakage mechanisms? Re-examine the data and identify the top three by dollar value. For each, explain the process failure that causes it."

## tip

Not all unbilled revenue is recoverable. Some of it may be contractual (included services, volume discounts, goodwill credits). Your job is to separate genuine process failures — where someone forgot to bill — from intentional business decisions. The CFO needs to know both.

## human_decision

Your group must decide: which leakage categories represent genuine process failures (recoverable) and which are business decisions (not recoverable)? The answer shapes your recommendation.

## checkpoint

Can you quantify the leakage in at least three categories with dollar amounts? If you can say "$1.8M is unbilled T&M overruns, $1.4M is scope creep on fixed-fee contracts, $0.6M is system errors," you are on track.
