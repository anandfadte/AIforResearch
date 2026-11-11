# Deep Research

> Find where the $4.2M leakage actually lives. (~8 minutes)

## research_mode
Analytical Deep-Dive | Reconciling delivery and billing records to quantify leakage by root cause category

## context

Now that you have profiled your sources, use your AI tool to conduct the reconciliation. Your goal is to categorise the $4.2M gap into distinct root causes and quantify each one.

## do_this

1. Profile both data files before reconciling. Know what fields can join them and where the coverage gaps are.
2. Match delivery records against invoices. Categorise what is unmatched: never invoiced, invoiced at a lower amount, or written off.
3. Break down by client, service line, and contract type. Is the leakage concentrated in a few accounts, or spread evenly?
4. Separate genuine process failures from contractual decisions. Not all unbilled revenue is recoverable.

## prompting_guideline

Ask your AI to show its working, not just conclusions. Have it classify each unmatched delivery record by likely reason: never invoiced, invoiced at a lower amount, contractual write-off, or data matching error, with the count and dollar value for each category. If it gives you a single root cause, push back: ask it to identify at least three distinct leakage mechanisms by dollar value and explain the process failure behind each.

## checkpoint

Can you quantify the leakage in at least three categories with dollar amounts? If you can say "$1.8M is unbilled scope creep, $1.4M is unmapped project codes, $0.6M is timesheet gaps," you are on track.
