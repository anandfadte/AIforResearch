# Deep Research

> Find where the 24 points of excess cost growth actually live. (~8 minutes)

## research_mode
Analytical Deep-Dive | Decomposing cloud spend into usage-driven growth vs. waste categories and quantifying savings

## context

Now that you have profiled your sources, use your AI tool to conduct the actual analysis. Your goal is to separate legitimate cost growth (driven by real usage) from waste (costs growing faster than or independent of usage).

## do_this

1. **Categorise cost growth.** Ask your AI tool to classify each service's cost growth into: (A) usage-driven (cost grew proportionally to usage), (B) price-driven (same usage, higher cost), (C) waste (resources provisioned but underutilised or idle), (D) new services (didn't exist in the baseline period).
2. **Quantify the waste categories.** For each waste category, estimate the monthly savings if addressed. Focus on: orphaned resources, oversized instances, missed reserved-instance or commitment discounts, and redundant vendor tools.
3. **Stress-test the AI's findings.** If the AI says "40% of compute spend is wasted," ask it to show you the utilisation data. Low utilisation might mean the instance is oversized, or it might mean it handles traffic spikes — the data alone won't tell you which.

## prompting_guideline

Ask your AI tool to **show its working** — not just conclusions. A good prompt: "For each of the top 10 services, calculate: (1) cost 12 months ago vs. now, (2) usage metric 12 months ago vs. now, (3) cost-per-unit-of-usage then vs. now. Flag any service where cost-per-unit increased more than 10% or where cost grew more than 2x the usage growth rate."

## prompting_guideline_2

If the AI gives you generic advice like "right-size your instances," push back: "Be specific. Based on the data, which exact service categories have the largest gap between cost growth and usage growth? Quantify the dollar opportunity for each, not the percentage."

## tip

Cloud cost waste comes in two flavours: the large obvious kind (a dev environment left running 24/7 that should run 8 hours) and the small hidden kind (hundreds of orphaned storage volumes at $3/month each that add up to $40K/month). Both matter, but the small hidden kind is harder to find and often larger in aggregate.

## human_decision

Your group must decide: which savings are quick wins (turn off this week) and which require engineering work (resize, re-architect, renegotiate)? The answer shapes the 90-day plan.

## checkpoint

Can you quantify the savings opportunity in at least three categories with monthly dollar amounts? If you can say "$180K/month from orphaned resources, $120K/month from commitment discounts, $80K/month from redundant tools," you are on track.
