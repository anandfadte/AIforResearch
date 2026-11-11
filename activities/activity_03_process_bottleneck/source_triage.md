# Source Triage

> Assess what you actually have before you start analysing. (~5 minutes)

## research_mode
Source Auditing | Evaluating data completeness, timestamp reliability, and potential blind spots in operational logs

## source_lens
Is this data current? | Does it cover the full period of the blowout (last 90 days), or only a snapshot?
Does it match the process scope? | Does the data cover all stages from order placement to delivery confirmation?
Is it evidence-backed? | Are timestamps system-generated, or manually entered (and therefore unreliable)?

## context

Download and open your data files. Before analysing anything, profile each source: What time period does it cover? What stages of the process does it represent? Are there gaps, duplicates, or suspicious patterns?

## files

Order_Lifecycle_Log.xlsx
Warehouse_Shift_Report.xlsx
Ops_Director_Memo.docx
Carrier_SLA_Summary.docx

## do_this

1. **Open each file and spend 60 seconds scanning it.** Do not start analysing — just note what each file contains, what time period it covers, and how reliable it looks.
2. **Ask your AI tool to profile the primary data file.** Upload the Order Lifecycle Log and ask: "What stages does this data cover? Are there missing timestamps, duplicates, or gaps? What percentage of orders have complete end-to-end tracking?"
3. **Rate each source** — primary data, supporting source, or potential distractor. Discuss as a group which sources you trust and which need verification.

## prompting_guideline

When profiling data, ask your AI tool to look for **completeness and consistency** rather than insights. A good first prompt: "Profile this dataset. For each column, tell me: data type, percentage of missing values, min/max/median values for numeric fields, and any anomalies. Do not draw conclusions yet."

## tip

The Ops Director Memo may frame the problem in a way that anchors your thinking prematurely. Read it last, after you have formed your own view from the data. Leadership narratives often point at the most visible cause, not the largest one.

## human_decision

Decide as a group: which sources do you trust enough to base your analysis on, and which will you treat with scepticism?

## checkpoint

Can you name the one data source you trust most — and explain why you trust it more than the others?
