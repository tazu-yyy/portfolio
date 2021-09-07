import React from 'react'
import Head from "next/head";

export const CommonHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>たづ（こんがりバグ）</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
