# Deep Research

> Find where the 24 points of excess cost growth actually live. (~8 minutes)

## research_mode
Analytical Deep-Dive | Decomposing cloud spend into usage-driven growth vs. waste categories and quantifying savings

## context

Now that you have profiled your sources, use your AI tool to conduct the actual analysis. Your goal is to separate legitimate cost growth (driven by real usage) from waste (costs growing faster than or independent of usage).

## do_this

1. Profile the data before analysing it. Know what services, time periods, and cost categories you have.
2. Classify cost growth by type: usage-driven, price-driven, waste, or new services. Where does cost grow faster than usage?
3. Quantify the waste categories. For each one, estimate the monthly savings if addressed.
4. Test the main finding from the other direction. If the data points to one category, ask whether a different category might be larger in aggregate.

## prompting_guideline

Ask your AI to show its working, not just conclusions. Have it calculate cost and usage metrics for each of the top 10 services over 12 months and flag any service where cost growth exceeds usage growth by more than 10%. If it gives you generic advice like "right-size your instances," push back: ask which specific service categories have the largest gap between cost growth and usage growth, and have it quantify the dollar opportunity for each. Low utilisation might mean an oversized instance or it might mean it handles traffic spikes: the data alone does not tell you which.

## checkpoint

Can you quantify the savings opportunity in at least three categories with monthly dollar amounts? If you can say "$180K per month from orphaned resources, $120K per month from commitment discounts, $80K per month from redundant tools," you are on track.
