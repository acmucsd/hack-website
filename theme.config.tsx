import React from 'react';
import { DocsThemeConfig, Link } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Logo from './components/Logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ACM Hack',
      };
    }
    return {
      titleTemplate: '%s',
    };
  },
  footer: {
    text: 'ACM Hack is so cool!',
  },
  search: {
    placeholder: 'Search',
  },
  sidebar: {
    toggleButton: true,
  },
  docsRepositoryBase: 'https://github.com/acmucsd/hack-website/blob/main',
};

export default config;
