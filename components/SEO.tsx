import Head from 'next/head';
import React from 'react';

export default function SEO({ text }: { text: string }) {
  return (
    <Head>
      <title>{text}</title>
      <meta name="description" content="마지막 과제입니다." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
