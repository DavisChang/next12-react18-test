import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js 12 and React 18</title>
        <meta name="description" content="Next.js 12 and React 18" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to this test playground project
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>Next.js 12 and React 18!</code>
        </p>

        <div className={styles.grid}>
          <a href="/react18/useSyncExternalStore" className={styles.card}>
            <h2>React18 &rarr;</h2>
            <p>useSyncExternalStore</p>
          </a>

          <a href="/nextjs/rustCompiler" className={styles.card}>
            <h2>Nextjs &rarr;</h2>
            <p>Faster builds and Fast Refresh with Rust compiler</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>TBD &rarr;</h2>
            <p>TBD</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
