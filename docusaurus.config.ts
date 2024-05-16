import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkCorepass from "remark-corepass";
import remarkCorebc from "remark-corebc";
import remarkCurrencyFormatter from "remark-currency-formatter";
import remarkFediverseUser from "remark-fediverse-user";
import math from "remark-math";
import katex from "rehype-katex";

import versions from "./versions.json";

const isDev = process.env.NODE_ENV === "development";
const isVersioningDisabled = !!process.env.DISABLE_VERSIONING;
const isBuildFast = !!process.env.BUILD_FAST;
const isCloudflarePages = !!process.env.CF_PAGES;
const isDeployPreview =
  isCloudflarePages && !!process.env.CF_PAGES_PULL_REQUEST;
const isBranchDeploy =
  isCloudflarePages && process.env.CF_PAGES_BRANCH !== "master";
const baseUrl = process.env.BASE_URL ?? "/";

function isPrerelease(version: string) {
  return (
    version.includes("alpha") ||
    version.includes("beta") ||
    version.includes("rc")
  );
}

function getLastVersion() {
  const firstStableVersion = versions.find((version) => !isPrerelease(version));
  return firstStableVersion ?? versions[0];
}

function getNextVersionName() {
  return "1.0.0";
}

const config: Config = {
  title: "Foxar",
  tagline: "Foxar",
  favicon: "img/Brand_Mark_2@3x.png",
  url: "https://foxar.dev",

  baseUrl,
  organizationName: "bchainhub",
  projectName: "foxar-docs",

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: ({ versionDocsDirPath, docPath }) => {
            return `https://github.com/bchainhub/foxar-docs/edit/master/${versionDocsDirPath}/${docPath}`;
          },
          routeBasePath: "/",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          disableVersioning: isVersioningDisabled,

          lastVersion:
            isDev ||
            isVersioningDisabled ||
            isDeployPreview ||
            isBranchDeploy ||
            isBuildFast
              ? "current"
              : getLastVersion(),
          onlyIncludeVersions: (() => {
            if (isBuildFast) {
              return ["current"];
            } else if (
              !isVersioningDisabled &&
              (isDev || isDeployPreview || isBranchDeploy)
            ) {
              return ["current", ...versions.slice(0, 2)];
            }
            return undefined;
          })(),
          versions: {
            current: {
              label: `${getNextVersionName()}`,
            },
            ...versions.reduce((acc, version) => {
              if (isPrerelease(version)) {
                return {
                  ...acc,
                  [version]: {
                    label: `v. ${version}`,
                  },
                };
              }
              return {
                ...acc,
                [version]: {
                  label: `v. ${version}`,
                },
              };
            }, {}),
          },
          remarkPlugins: [
            math,
            remarkCorepass,
            remarkCorebc,
            remarkCurrencyFormatter,
            remarkFediverseUser,
          ],
          rehypePlugins: [
            [
              katex,
              {
                output: "mathml",
                strict: "newLineInDisplayMode",
              },
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/manifest.json",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "generator",
        content: "Foxar Generator",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Organization",
        name: "Foxar",
        url: "https://foxar.dev",
        logo: "https://foxar.dev/img/logo.svg",
      }),
    },
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: "img/social-card.png",
    metadata: [
      {
        name: "description",
        content:
          "Foxar is a blazing fast, portable and modular toolkit for Core BC app development.",
      },
      { property: "og:title", content: "Foxar" },
      {
        property: "og:description",
        content:
          "Foxar is a blazing fast, portable and modular toolkit for Core BC app development.",
      },
      { property: "og:type", content: "website" },
      {
        name: "keywords",
        content:
          "foxar, spark, probe, shuttle, pilot, developer, development, hub, core, documentation, docs, core coin, core token, connector, protocol",
      },
      { name: "theme-color", content: "#1362d5" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "Foxar",
        src: "/img/logo-text.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr class="dropdown-separator">',
            },
            {
              to: "/versions",
              label: "All versions",
            },
          ],
        },
        {
          href: "https://github.com/bchainhub/foxar",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Foxar",
        src: "img/logo-footer.svg",
        width: 224,
        height: 149,
      },
      links: [
        {
          title: "Ecosystem",
          items: [
            {
              label: "CoreBC Homepage",
              href: "https://coreblockchain.net/",
            },
            {
              label: "Blockindex",
              href: "https://blockindex.net/",
            },
            {
              label: "Payto Money",
              href: "https://payto.money/",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "https://blog.coreblockchain.net/",
            },
            {
              label: "CIP",
              href: "https://cip.coreblockchain.net/",
            },
            {
              label: "Booster",
              href: "https://coreblockchain.net/#booster",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://twitter.com/corecoincc",
            },
            {
              label: "GitHub",
              href: "https://github.com/core-coin",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/SCxmFr5Pwp",
            },
            {
              label: "Core ◆ Talk",
              href: "https://coretalk.space/@coreblockchain",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Foxar.`,
    },
    prism: {
      additionalLanguages: ["solidity", "bash", "toml", "json"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
