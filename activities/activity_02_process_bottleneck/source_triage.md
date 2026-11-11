# Source Triage

> Assess what you actually have before you start analysing. (~5 minutes)

## research_mode
Source Auditing | Evaluating data completeness, timestamp reliability, and potential blind spots in operational logs

## context

Before you search for a bottleneck, check whether your data even covers the full chain. Operational logs often have gaps: missing timestamps, excluded warehouses, or non-working days that look like delays. A blank field can mislead you as much as an outlier.

## files

- Order_Lifecycle_Log.xlsx
- Warehouse_Shift_Report.xlsx
- Ops_Director_Memo.docx
- Carrier_SLA_Summary.docx

## do_this

1. Open each file and write one line about it: what it covers, what time period, and how reliable it looks.
2. For each file, ask three things: Does it cover the full 90-day period? Does it represent all stages from order placement to delivery confirmation? Are the timestamps system-generated or manually entered?
3. As a group, decide which sources you trust enough to base your analysis on, and which you will treat with scepticism.

## prompting_guideline

For each file, ask your AI whether it is current, whether it covers the full period and all process stages, and whether the timestamps are system-generated or manually entered. Ask for the strongest reason to doubt each source.

## checkpoint

Can you name the one data source you trust most and explain why you trust it more than the others?
