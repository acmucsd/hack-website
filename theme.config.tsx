import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>ACM Blog</span>,
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'ACM Blog is so cool!',
  },
  search: {
    placeholder: 'Search',
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
