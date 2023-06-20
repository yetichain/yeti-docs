/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  specifications: [
    {
      type: "html",
      value: "Specifications",
      className: "sidebar-title",
    },
    "introduction",
    "positioning",
    "features",
    "funding",
    {
      type: "category",
      label: "YETI Protocol",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "protocol/protocol-components",
        "protocol/state-management",
        {
          type: "category",
          label: "Transaction Life Cycle",
          link: {
            type: "generated-index",
          },
          items: [
            "protocol/l2-transaction-cycle-intro",
            "protocol/transaction-execution",
            "protocol/transaction-batching",
            "protocol/transaction-sequencing",
            "protocol/transaction-aggregation",
          ],
        },
        "protocol/incentive-mechanism",
        "protocol/upgradability",
        "protocol/admin-role",
        {
          type: "category",
          label: "Malfunction Resistance",
          link: {
            type: "generated-index",
          },
          items: [
            "protocol/sequencer-resistance",
            "protocol/aggregator-resistance",
            "protocol/emergency-state",
          ],
        },
        {
          type: "category",
          label: "YETI Bridge",
          link: {
            type: "generated-index",
          },
          items: [
            "protocol/antofy-bridge",
            "protocol/exit-tree",
            "protocol/bridge-smart-contract",
            "protocol/flow-of-asset",
          ],
        },
        "protocol/evm-diff",
      ],
    },
  ],
    
          
     
       
  build: [
    {
      type: "html",
      value: "Developer Guides",
      className: "sidebar-title",
    },
    "positioning",
    "bridge-to-antofy",
    {
      type: "category",
      label: "YETI",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["funding", "roadmap"],
    },
    "tokenomics",
    "features",
    "architecture",
  ],

  faq: [
    {
      type: "html",
      value: "FAQs",
      className: "sidebar-title",
    },
    "faq/general-faq",
    "faq/protocol-faq",
    "faq/evm-faq",
    "risk-disclosure",
  ],
};
