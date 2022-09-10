import Head from 'next/head'
import MyHeader from './components/layout/MyHeader'
import styles from '../styles/Home.module.css'
import Hero from './components/layout/Hero'
import About from './components/About'
import Contacts from './components/layout/Contacts'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexandre Dantas</title>
        <meta name="description" content="Alexandre Dantas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyHeader />

      <Hero />
      
      <About />
      
      <Contacts/>
    </div>
  )
}
