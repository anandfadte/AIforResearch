# Source Triage

> Assess what you actually have before you start analysing. (~5 minutes)

## research_mode
Source Auditing | Evaluating data completeness, cost allocation accuracy, and potential blind spots in cloud billing data

## context

Download and open your data files. Before analysing anything, profile each source: what time period does it cover, what services or vendors does it include, and are there gaps or categories that might be missing?

## files

- Cloud_Cost_Explorer_Export.xlsx
- Vendor_Contract_Summary.xlsx
- CTO_Slack_Thread.docx
- FinOps_Team_Report.docx

## do_this

1. Open each file and write one line about it: what services or vendors it covers, what time period, and how complete it looks.
2. For each file, ask three things: Does it cover the full trailing 12 months? Does it include all cloud providers and vendor tools? Are the costs system-generated from the billing API or manually estimated?
3. As a group, decide which sources you trust enough to draw conclusions from, and what gaps to flag.

## prompting_guideline

For each file, ask your AI whether it is current, whether it covers all cloud providers and vendor tools, and whether the costs are system-generated or manual estimates. Focus on trends and concentration rather than absolute numbers. Ask for the strongest reason to doubt each source.

## checkpoint

Can you state the total monthly cloud spend, the growth rate, and the top 3 services by spend? If not, profile the data again.
