# The Brief

> Align on the CTO's question and decompose it into researchable cost hypotheses. (~3 minutes)

## research_mode
Research Framing | Decomposing a cloud cost overrun into testable hypotheses about waste, pricing, and usage patterns

## scenario

Your client is a Series C SaaS company spending $2.8M per month on cloud infrastructure and vendor tools. Over the last year, **cloud costs rose 42% while product usage grew only 18%**. The gap between cost growth and usage growth is accelerating — last quarter alone, costs grew 14% while usage grew just 3%.

The CTO needs answers for the board: **Where is the waste?** Is it orphaned resources, oversized instances, missed commitment discounts, shadow IT subscriptions, or something else — and how much can be saved in 90 days?

Her mandate to your pod: *"Don't tell me to 'optimise.' Tell me exactly what is costing us money for no reason and what to turn off first."*

## context

You will receive a 4-file data pack in Phase 2. Before touching any files, align as a group on the exact question the CTO needs answered and design the analytical approach that will drive your investigation.

## do_this

1. **Read the brief aloud in your pod.** Agree in one sentence: what decision does the CTO actually need to make? Write it down before opening any AI tool.
2. **Use your AI tool (Claude, Copilot, ChatGPT, etc.) to identify 4 to 6 categories of cloud cost waste.** Push back on the first list — generic FinOps advice won't help you interrogate real billing data.
3. **Rank and select your top 2 hypotheses** — the two waste categories that, if confirmed with data, would explain the largest share of the cost-usage gap.

## prompting_guideline

Assign the AI a **FinOps analyst role** (for example, a cloud cost optimisation specialist rather than a helpful assistant). Paste the **full scenario brief verbatim** and ask it to surface **testable hypotheses about where cost growth exceeds usage growth** — not generic cloud savings tips. When the first list feels like a vendor blog post, push back and ask for hypotheses testable against billing line items.

## tip

You do not need a cloud engineering background for this. Focus on the arithmetic: if usage grew 18% but costs grew 42%, approximately 24 percentage points of cost growth is not explained by usage. Your job is to find where those 24 points live.

## human_decision

Your AI tool can generate cost hypotheses, but **only your pod** can decide which hypothesis the CTO needs answered for the board. Pick your top two and record them before moving on.

## checkpoint

Can your pod explain in one sentence where you think the waste is hiding and why? If not, refine your hypotheses.
