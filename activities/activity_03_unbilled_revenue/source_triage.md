# Source Triage

> Assess what you actually have before you start reconciling. (~5 minutes)

## research_mode
Source Auditing | Evaluating data completeness, matching keys, and potential blind spots in billing and delivery records

## context

Download and open your data files. Before reconciling anything, profile each source: what period does it cover, what fields does it contain, and can you join delivery records to billing records?

## files

- Service_Delivery_Log.xlsx
- Billing_System_Extract.xlsx
- Account_Manager_Notes.docx
- Finance_VP_Email.docx

## do_this

1. Open each file and write one line about it: what it contains, what period it covers, and whether the data can be matched across files.
2. For each file, ask three things: Is it current? Can you join delivery records to billing records using it? Are the amounts system-generated or manually entered estimates?
3. As a group, decide which sources you trust and which join keys you will use for the reconciliation.

## prompting_guideline

For each file, ask your AI whether it is current, whether the data can be joined across files, and whether the amounts are system-generated or manually estimated. Focus on joinability and completeness rather than insights. Ask for the strongest reason to doubt each source.

## checkpoint

Can you state the total delivered value, total billed value, and the gap, and do those numbers match the $4.2M the auditors found?
