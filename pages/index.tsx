import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Population App</title>
        <meta name="description" content="World Population Clock 2022" />
        <link rel="icon" href="/world_population_logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.worldpopulation.app/">World Population App</a>
        </h1>

        <p className={styles.description}>
        <br/>
        Current World Population: 7,966,922,900
        <br/>
        Births this year: 85,555,847
        <br/>
        Deaths this year: 35,918,394
        <br/>
        Net population growth this year: 49,637,453
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.worldpopulation.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by World Population App
          <span className={styles.logo}>
            <Image src="/world_population_logo.png" alt="World Population Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
