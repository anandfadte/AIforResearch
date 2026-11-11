# Deliver & Debrief

> Build the savings plan, present it, then see how the activity was designed. (~7 minutes)

## research_mode
Executive Communication | Packaging cost analysis into a board-ready waste map and 90-day savings plan

## context

Your output is a one-page cloud savings plan. Write it for someone heading into a board meeting, not for someone who wants to understand your methodology. The CTO needs to know the total waste, what is driving it, and what to turn off first.

## do_this

1. Brief your AI tool clearly: "Create a one-page cloud savings plan for a CTO board presentation. Show the cost-usage gap. Break down the waste into categories with monthly dollar amounts. Organise into three implementation waves: Week 1, Month 1, Month 3. Include our top recommendation with expected monthly savings. Use our three insights: [paste your insights here]."
2. Review the first draft together. Revise specific parts: tighten the language, fix any numbers that do not match your analysis, and remove any claims you cannot support with evidence.
3. Choose a presenter. That person shares the plan and names one thing the AI tool got wrong or missed during the activity.
4. After presenting, reflect as a group: which data source did you trust the most and why? Where did the AI change your thinking, and where did your group overrule it?

## prompting_guideline

Brief the AI the way you would brief a junior analyst: give it the audience, the decision being supported, your three insights with evidence, and the exact format you need. Say explicitly: "Do not add any claims or numbers beyond what I have given you." Then iterate with specific instructions rather than starting over. Your name goes on this plan, not the AI's. Everyone in the group should read the final version once before it is presented.

## checkpoint

Could the CTO take this into a board meeting and present it without asking you a single clarifying question? That is the standard.

## reveal_distractors

**CTO Slack Thread:** The Slack thread blamed the ML team for "spinning up GPU instances without approval." This is true: the ML team's GPU spend is up 280%. But ML compute represents only 8% of total cloud spend. Even a 50% reduction in ML GPU costs would save $22K per month out of a $2.8M monthly bill. If your group anchored on "it's the ML team," the Slack thread diverted you from the larger waste categories.

## reveal_quirks

**14 vendor subscriptions billed annually that renewed automatically.** Seven of these are for tools the company stopped using 6 or more months ago. They do not appear in the monthly billing trend because they are annual charges, but they represent $340K per year in pure waste.

**Development and staging environments are tagged as "production" in the cost data.** If you filtered for production-only costs, you included environments that run 24/7 but only need to run during business hours. This is roughly $95K per month in over-provisioning.

## reveal_insight_path

The cost-usage gap breaks into four categories: orphaned and idle resources ($210K per month), including storage volumes, load balancers, and IP addresses attached to decommissioned services, which is pure waste recoverable immediately; non-production environments running 24/7 ($95K per month), which are dev, staging, and QA environments that should auto-scale to zero outside business hours and represent a quick engineering win; commitment discount gaps ($160K per month), where the company uses 72% on-demand compute despite having stable baseline usage patterns that would benefit from 1-year reserved instances; and redundant SaaS tools ($65K per month), including three overlapping project management tools, two CI/CD platforms, and the seven auto-renewed unused subscriptions.

## reveal_takeaway

Within the next 7 days, pull your own team's cloud or vendor spending data and apply the same cost-vs-usage decomposition with your AI tool. The habit of asking "is this cost growing because usage is growing?" will change what you find.
