# Source Triage

> Assess what you actually have before you start reconciling. (~5 minutes)

## research_mode
Source Auditing | Evaluating data completeness, matching keys, and potential blind spots in billing and delivery records

## source_lens
Is this data current? | Does it cover the full quarter in question, or only a partial extract?
Does it match the reconciliation scope? | Can you match delivery records to invoices using a common key (client ID, project code, date)?
Is it evidence-backed? | Are the amounts system-generated from timesheets and contracts, or manually entered estimates?

## context

Download and open your data files. Before reconciling anything, profile each source: What period does it cover? What fields does it contain? Can you join delivery records to billing records?

## files

Service_Delivery_Log.xlsx
Billing_System_Extract.xlsx
Account_Manager_Notes.docx
Finance_VP_Email.docx

## do_this

1. **Open each file and spend 60 seconds scanning it.** Do not start analysing — just note what each file contains, what time period it covers, and whether the data can be matched across files.
2. **Ask your AI tool to profile both data files.** Upload them and ask: "Compare the schemas of these two files. What fields can be used to join them? What percentage of delivery records have a matching billing record? What is the total delivered value vs. total billed value?"
3. **Rate each source** — primary data, supporting source, or potential distractor. Discuss which sources you trust and which need verification.

## prompting_guideline

When profiling reconciliation data, ask your AI tool to focus on **joinability and completeness** rather than insights. A good first prompt: "Profile these two datasets side by side. For each: list columns, row counts, date ranges, and total monetary values. Then: what percentage of records in the delivery log have a matching record in the billing extract by [common key]? Show me the unmatched records."

## tip

The Finance VP Email may frame the problem as "account managers not submitting timesheets on time." This may be partially true, but it is one hypothesis — not the conclusion. Read it after forming your own view from the data.

## human_decision

Decide as a group: do you have enough data to reconcile delivery against billing, and which join keys will you use?

## checkpoint

Can you state the total delivered value, total billed value, and the gap — and do those numbers match the $4.2M the auditors found?
