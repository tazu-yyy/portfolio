import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Profile } from '../components/Profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <title>たづ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/iroha-mochi.otf" as="font" crossOrigin="" />
      </Head>

      <main className={styles.main}>
        <Profile />
      </main>
    </div>
  )
}
