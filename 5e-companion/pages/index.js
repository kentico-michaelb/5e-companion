import CardLink from '../components/CardLink'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout home={true}>
      <h1 className={styles.title}>
        5e Companion
      </h1>

      <div className={styles.grid}>
        <CardLink
          path={'combat'}
          title={'Combat Tools'}
        />
        {/* <CardLink
          path={'merchants'}
          title={'Merchants Generator'}
        /> */}
        <CardLink
          path={'spell-items'}
          title={'Spell Item Generator'}
        />
      </div>
    </Layout>

  )
}
