# Deep Research

> Find where the 7 days of delay actually live. (~8 minutes)

## research_mode
Analytical Deep-Dive | Decomposing end-to-end cycle time into stage-level contributions and isolating root causes

## context

Now that you have profiled your sources, use your AI tool to conduct the actual analysis. Your goal is to quantify how much delay each process stage contributes and identify the root cause of the blowout.

## do_this

1. Profile the data before analysing it. Know what stages it covers and where there are gaps before you interpret any cycle times.
2. Calculate how much delay each process stage contributes. Where did the 7 extra days appear?
3. Break down by warehouse, carrier, and product category. Is the bottleneck affecting all orders, or is it concentrated?
4. Test the main finding from the other direction. If the data points to one stage, ask what the picture looks like if that stage is not the main cause.

## prompting_guideline

Ask your AI to show its working, not just conclusions. Have it calculate median and 90th percentile cycle times for each stage in the baseline period vs the blowout period, and flag which stages show the largest increase at both. If it gives you a single root cause, push back: what if there are at least two contributing factors? Have it identify the second-largest contributor and quantify how much of the 7-day blowout each one explains.

## checkpoint

Can you quantify the delay contribution of each stage in days? If you can say "3.2 days of the 7-day blowout comes from stage X and 2.8 days from stage Y," you are on track.
