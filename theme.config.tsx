/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Logo from './public/Logo';
import Navbar from './src/components/navbar';

const config: DocsThemeConfig = {
  logo: <Logo />,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url = `https://hack.acmucsd.com${
      defaultLocale === locale ? asPath : `/${locale}${asPath}`
    }`;
    const title = frontMatter.title || 'ACM Hack at UC San Diego';
    const description =
      frontMatter.description ||
      "ACM Hack at UC San Diego is a community focused on software engineering and exploring what's possible through code!";

    return (
      <>
        {/* google indexing data */}

        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />

        <Navbar />

        {/* link sharing data */}

        {/* page url to be used as permanent id */}
        <meta property="og:url" content={url} />
        {/* type of content */}
        <meta property="og:type" content="website" />
        {/* actual website title */}
        <meta property="og:site_name" content="ACM Hack at UC San Diego" />
        {/* title to display for the specific link being shared */}
        <meta property="og:title" content={title} />
        {/* preview description text */}
        <meta property="og:description" content={description} />
      </>
    );
  },
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
    text: 'Made with 🧡 by ACM Hack!',
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
