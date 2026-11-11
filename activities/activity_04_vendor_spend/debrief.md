# Debrief

> Score yourselves, then see how the activity was designed. (~5 minutes)

## research_mode
Reflective Practice | Examining which cost analysis habits delivered value and which would fail under real-world scrutiny

## context

**Share your deliverable** with the session facilitator for feedback. While you wait, reflect as a group.

## do_this

1. Discuss in your group:
   - Which data source did you trust the most? What earned that trust?
   - Where did the AI tool change your group's thinking? Where did you overrule it?
   - If you had one more hour, what would you verify first?

## tip

The reflection matters as much as the deliverable. Cloud cost analysis is an ongoing discipline — the habits you build here determine whether savings stick or costs creep back.

## reveal_distractors

**CTO Slack Thread:** The Slack thread blamed the ML team for "spinning up GPU instances without approval." This is true — the ML team's GPU spend is up 280%. But ML compute represents only 8% of total cloud spend. Even a 50% reduction in ML GPU costs would save $22K/month out of a $2.8M monthly bill. If your group anchored on "it's the ML team," the Slack thread diverted you from the larger waste categories.

## reveal_quirks

**14 vendor subscriptions billed annually that renewed automatically** — seven of these are for tools the company stopped using 6+ months ago. They don't appear in the monthly billing trend because they are annual charges, but they represent $340K/year in pure waste.

**Development and staging environments are tagged as "production"** in the cost data — if you filtered for production-only costs, you included environments that run 24/7 but only need to run during business hours. This is roughly $95K/month in over-provisioning.

## reveal_insight_path

The cost-usage gap breaks into four categories: (1) **Orphaned and idle resources** ($210K/month) — storage volumes, load balancers, and IP addresses attached to decommissioned services. Pure waste, recoverable immediately. (2) **Non-production environments running 24/7** ($95K/month) — dev, staging, and QA environments that should auto-scale to zero outside business hours. Quick engineering win. (3) **Commitment discount gaps** ($160K/month) — the company uses 72% on-demand compute but has stable baseline usage patterns that would benefit from 1-year reserved instances or savings plans. Requires procurement decision. (4) **Redundant SaaS tools** ($65K/month) — three overlapping project management tools, two CI/CD platforms, and the seven auto-renewed unused subscriptions. Requires vendor consolidation.

## reveal_takeaway

Within the next 7 days, pull your own team's cloud or vendor spending data and apply the same cost-vs-usage decomposition with your AI tool. The habit of asking "is this cost growing because usage is growing?" will change what you find.
