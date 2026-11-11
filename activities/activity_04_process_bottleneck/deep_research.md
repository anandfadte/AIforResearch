# Deep Research

> Find where the 7 days of delay actually live. (~8 minutes)

## research_mode
Analytical Deep-Dive | Decomposing end-to-end cycle time into stage-level contributions and isolating root causes

## context

Now that you have profiled your sources, use your AI tool to conduct the actual analysis. Your goal is to quantify how much delay each process stage contributes and identify the root cause of the blowout.

## do_this

1. **Calculate stage-by-stage cycle times.** Ask your AI tool to compute the average time spent in each stage (order received → picked → packed → shipped → delivered) for the baseline period vs. the blowout period. Which stage added the most days?
2. **Segment the data.** Break down by warehouse, product category, and carrier. Does the bottleneck affect all orders equally, or is it concentrated in specific segments?
3. **Stress-test the AI's findings.** If the AI says "warehouse picking is the bottleneck," ask it to show you the distribution — is it all orders, or is a subset of orders with extreme delays pulling the average up?

## prompting_guideline

Ask your AI tool to **show its working** — not just conclusions. A good prompt: "For each process stage, calculate the median and 90th percentile cycle time for Q1 (baseline) vs Q3 (blowout). Show me the delta for each stage. Which stages have the largest increase at the median AND at the 90th percentile? Are the same stages responsible at both percentiles?"

## prompting_guideline_2

If the AI gives you a single root cause, push back: "What if I told you there are at least two contributing factors? Re-examine the data and identify the second-largest contributor. How much of the 7-day blowout does each explain?"

## tip

Medians are more useful than averages for process time data. A few extreme outliers (lost shipments, returned orders) can dramatically inflate an average while the typical experience is different. Always check both.

## human_decision

Your group must decide: is this primarily a warehouse problem, a carrier problem, or a handoff problem? The answer determines your recommendation.

## checkpoint

Can you quantify the delay contribution of each stage in days? If you can say "3.2 days of the 7-day blowout comes from stage X and 2.8 days from stage Y," you are on track.
