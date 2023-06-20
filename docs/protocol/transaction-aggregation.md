---
id: transaction-aggregation
title: Batch Aggregation and Consolidated State
sidebar_label: Batch Aggregation
description: A guide to help developers understand the transaction life cycle in Antofy Blockchain.
keywords:
  - antofy
  - abn
  - protocol
  - Batch Aggregation
  - Consolidated State
  - batches
  - SNARK
  - zero-knowledge
---

:::info

This document is a continuation in the series of articles explaining the [<ins>Transaction Life Cycle</ins>](l2-transaction-cycle-intro.md) inside Antofy Blockchain.

:::

The **Trusted Aggregator should eventually aggregate the sequences of batches previously committed by the Trusted Sequencer in order to achieve the L2 State final stage**, which is the Consolidated State.
