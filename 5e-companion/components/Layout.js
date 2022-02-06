import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <title>5e Companion</title>
                <meta name="description" content="Utility to accompany Roll20 D&amp;D 5e games!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    {!home && <Navigation />}
                    {children}
                </main>
            </div>
        </>
    )
}