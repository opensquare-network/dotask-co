import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dotAsk</title>
        <meta name="description" content="Community for blockchain innovators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">dotAsk.co!</a>
        </h1>

        <p className={styles.description}>
          <a className={styles.a1} href="https://www.dotask.co/">dotask.co</a> is under construction. You can visit{' '}
          Chinese version <a className={styles.a1} href="https://www.dotask.cc/">dotask.cc</a> first.
        </p>
        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'OpenSquare'}

        </a>
      </footer>
    </div>
  )
}
