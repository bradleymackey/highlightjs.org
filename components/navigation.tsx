import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import styles from './navigation.module.scss';

const links = [
  <Link href="/#usage">Usage</Link>,
  <Link href="/news">News</Link>,
  <Link href="https://highlightjs.readthedocs.io/">Docs</Link>,
  <Link href="/demo/">Demo</Link>,
  <Link href="/download/">Download</Link>,
  <Link href="https://github.com/highlightjs/highlight.js">GitHub</Link>,
];

export const Navigation = () => (
  <header className="container py-5">
    <Head>
      <title>highlight.js</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav className="row">
      <div className={`col-md-4 ${styles.titleContainer}`}>
        <span className={styles.wordMark}>
          <Link href="/">highlight.js</Link>
        </span>
      </div>
      <div className={`col-md-8 ${styles.navContainer}`}>
        <ul className={styles.navigation}>
          {links.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);
