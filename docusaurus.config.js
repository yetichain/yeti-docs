const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "YETI Documentation",
  tagline: "The official developer documentation portal for YETI Blockchain.",
  url: "https://docs.yetichain.com",
  baseUrl: "/",
  favicon: "/img/logo-abn.svg",
  organizationName: "yeti",
  projectName: "yeti-docs",
  customFields: {
    description: "Build your next blockchain dApp on YETI Network.",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  onBrokenLinks: 'log',
  themeConfig: {
    metadata: [{name: 'description', content: 'Welcome to YETI Documentation, the official documentation portal for YETI world.'}],
    announcementBar: {
      id: 'banner',
      content: `
        <div class="announcement-bar">
          YETI testnet Beta is now Live! 
          <a href="/docs/positioning" class="announcement-link" style="color: #ffffff;">Positioning</a>
          <a href="/docs/risk-disclosure" class="announcement-link" style="color: #ffffff;">Risks</a>
        </div>
      `,
      textColor: '#ffffff',
      isCloseable: false,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: "YETI Chain",
          items: [
            {
              label: "About Us",
              href: "https://yetichain.com/"
            },
            {
              label: "Blog",
              href: "https://medium.com/@yetichain"
            },
            {
              label: "Careers",
              href: "mailto:https://yetichain.com"
            },
            {
              label: "YET Token",
              href: "https://yetidex.com/swap/bnb/bnb-to-abn"
            },
            {
              label: "Join Us",
              href: "https://yetichain.com/"
            },
          ]
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "YETI Chain",
              href: "https://yetichain.com"
            },
            {
              label: "YETI Finance",
              href: "https://yetichain.finance"
            },
            {
              label: "YETI DEX",
              href: "https://yetidex.com/"
            },
            {
              label: "YETI Wallet",
              href: "https://chrome.google.com/webstore/detail/yeti-web30-blockchain-wal/odpnjmimokcmjgojhnhfcnalnegdjmdn"
            },
            {
              label: "Yeti AI",
              href: "#"
            },
          ]
        },
        {
          title: "Use Antofy",
          items: [
            {
              href: 'https://yetichain.finance',
              label: 'YETI Finance',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://staking.yetichain.com',
              label: 'Staking',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://yetiscan.com/',
              label: 'YETI Scan',
              target: '_blank',
              rel: null,
            },
            {
              href: '#',
              label: 'YETI AI',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://yetidex.com',
              label: 'Yeti dApps',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              href: 'https://yetichain.com',
              label: 'Antofy Support',
            },
            {
              label: "Advocate Antofy",
              href: "https://yetichain.com"
            },
            {
              label: "Antofy Funds",
              href: "https://yetichain.com"
            },
            {
              label: "Bug Bounty",
              href: "https://yetichain.com"
            },
            {
              href: 'https://yetichain.com',
              label: 'Build your own dApp',
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              href: 'https://twitter.com/yetichain',
              label: 'Twitter',
            },
            {
              href: 'https://t.me/yetichain',
              label: 'Forum',
            },
          ]
        },
        {
          title: "Legal",
          items: [
              {
                href: 'https://yetichain.com/terms-conditions',
                label: 'Terms of Use',
              },
              {
                label: "Privacy Policy",
                href: "https://yetichain.com/privacy-policy"
              },
              {
                label: "Cookie Policy",
                href: "https://yetichain.com/cookie-policy"
              },
              {
                label: "Risks",
                href: "https://yetichain.com/risk-disclosure"
              },
          ]
        },
      ],
    },
    image: 'img/thumbnail.png',
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "yeti",
      appId: '7OGWPLU80E',
      apiKey: "43743b7a07c349fb251cea12958582c0",
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ['content:20'],
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "yeti logo",
        src: "img/yeti.svg",
        srcDark: "img/yeti.svg",
        href: '/',
        target: "_self",
       },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'build',
          label: 'Guides',
          target: '_self',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'specifications',
          label: 'Specs',
          target: '_self',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'faq',
          label: 'FAQs',
          target: '_self',
        },
        {
          label: "Solutions",
          position: "right",
          items: [
            {
              href: 'https://antofy.io',
              label: 'Blockchain',
              target: '_blank',
              rel: null,
            },
            {
              href: '/',
              label: 'Antofy',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://antofy.money',
              label: 'Money',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://antofy.ai',
              label: 'AI',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://antofy.finance',
              label: 'Finance',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          href: "https://github.com/antofy",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://twitter.com/0xantofy",
          position: "right",
          className: "header-twitter-link",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/antofy/antofy-docs/tree/main/",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [[katex, {strict: false, throwOnError: true,globalGroup: true}]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
           trackingID: 'G-',
           anonymizeIP: true,
        },
      },
    ],
  ],
};
