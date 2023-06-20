const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Antofy Documentation",
  tagline: "The official developer documentation portal for Antofy Blockchain.",
  url: "https://docs.antofy.io",
  baseUrl: "/",
  favicon: "/img/logo-abn.svg",
  organizationName: "antofy",
  projectName: "antofy-docs",
  customFields: {
    description: "Build your next blockchain dApp on Antofy Network.",
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
    metadata: [{name: 'description', content: 'Welcome to Antofy Documentation, the official documentation portal for Antofy world.'}],
    announcementBar: {
      id: 'banner',
      content: `
        <div class="announcement-bar">
          Antofy testnet Beta is now Live! 
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
          title: "Antofy Labs",
          items: [
            {
              label: "About Us",
              href: "https://antofy.com/"
            },
            {
              label: "Blog",
              href: "https://antofy.com/blog/"
            },
            {
              label: "Careers",
              href: "mailto:https://antofy.com/blog"
            },
            {
              label: "ABN Token",
              href: "https://antofy.finance/swap/bnb/bnb-to-abn"
            },
            {
              label: "Join Us",
              href: "https://antofy.com/"
            },
          ]
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Antofy Labs",
              href: "https://antofy.com"
            },
            {
              label: "Antofy Finance",
              href: "https://antofy.finance"
            },
            {
              label: "Antofy Money",
              href: "https://antofy.money"
            },
            {
              label: "Antofy Games",
              href: "https://antofy.games"
            },
            {
              label: "Antofy AI",
              href: "https://antofy.ai"
            },
          ]
        },
        {
          title: "Use Antofy",
          items: [
            {
              href: 'https://antofy.finance',
              label: 'Antofy Finance',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://staking.antofy.finance',
              label: 'Staking',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://antofyscan.com/',
              label: 'Antofy Scan',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://antofy.ai/',
              label: 'Antofy AI',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://antofy.money',
              label: 'Ecosystem dApps',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              href: 'https://antofy.com',
              label: 'Antofy Support',
            },
            {
              label: "Advocate Antofy",
              href: "https://antofy.com"
            },
            {
              label: "Antofy Funds",
              href: "https://antofy.com"
            },
            {
              label: "Bug Bounty",
              href: "https://antofy.com"
            },
            {
              href: 'https://antofy.com',
              label: 'Build your own dApp',
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              href: 'https://twitter.com/0xantofy',
              label: 'Twitter',
            },
            {
              href: 'https://t.me/antofygroup',
              label: 'Forum',
            },
            {
              href: 'https://www.reddit.com/r/0xantofy/',
              label: 'Reddit',
            },
            {
              href: 'https://t.me/antofylabs',
              label: 'Telegram',
            },
          ]
        },
        {
          title: "Legal",
          items: [
              {
                href: 'https://antofy.com/legal',
                label: 'Terms of Use',
              },
              {
                label: "Privacy Policy",
                href: "https://antofy.com/legal"
              },
              {
                label: "Cookie Policy",
                href: "https://antofy.com/legal"
              },
              {
                label: "Risks",
                href: "/docs/risk-disclosure"
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
      indexName: "antofy",
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
        alt: "antofy logo",
        src: "img/antofy.svg",
        srcDark: "img/antofy.svg",
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
