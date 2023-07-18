/**
 * This file isn't being used right now. We'll use this to configure a custom theme for Nextra down the line.
 */
import { NextraThemeLayoutProps } from 'nextra';
import NextraLayout from 'nextra-theme-docs';

export default function Layout(opts: NextraThemeLayoutProps) {
  // const { pageMap } = opts.pageOpts;
  return NextraLayout(opts);
}
