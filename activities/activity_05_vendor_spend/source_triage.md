# Source Triage

> Assess what you actually have before you start analysing. (~5 minutes)

## research_mode
Source Auditing | Evaluating data completeness, cost allocation accuracy, and potential blind spots in cloud billing data

## source_lens
Is this data current? | Does it cover the full trailing 12 months, or only a recent snapshot?
Does it match the analysis scope? | Does the data cover all cloud providers and vendor tools, or only the primary one?
Is it evidence-backed? | Are costs system-generated from the billing API, or manual estimates from a spreadsheet?

## context

Download and open your data files. Before analysing anything, profile each source: What time period does it cover? What services or vendors does it include? Are there gaps or categories that might be missing?

## files

Cloud_Cost_Explorer_Export.xlsx
Vendor_Contract_Summary.xlsx
CTO_Slack_Thread.docx
FinOps_Team_Report.docx

## do_this

1. **Open each file and spend 60 seconds scanning it.** Do not start analysing — just note what each file contains, what time period it covers, and how comprehensive it looks.
2. **Ask your AI tool to profile the primary data file.** Upload the Cloud Cost Explorer Export and ask: "What cloud services are represented? What is the total monthly spend trend over the period? Are there service categories growing faster than others? What percentage of total spend do the top 5 services represent?"
3. **Rate each source** — primary data, supporting source, or potential distractor. Discuss which sources you trust and which need verification.

## prompting_guideline

When profiling cloud cost data, ask your AI tool to focus on **trends and concentration** rather than absolute numbers. A good first prompt: "Profile this dataset. Show me: total monthly spend by month, the top 10 services by spend, month-over-month growth rate for each of the top 10, and any services that appeared or disappeared during the period."

## tip

The CTO Slack Thread may contain strong opinions about which team is "wasting money." These opinions often target the most visible spend (the largest line item) rather than the fastest-growing one. Read it after forming your own view from the data.

## human_decision

Decide as a group: does this data cover enough of the spend to draw meaningful conclusions, and what gaps should you flag?

## checkpoint

Can you state the total monthly cloud spend, the growth rate, and the top 3 services by spend? If not, profile the data again.
