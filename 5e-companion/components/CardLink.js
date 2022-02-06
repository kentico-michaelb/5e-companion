import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function CardLink({ path, title, description }) {
    return (
        <Link href={`/${path}`}>
          <a className={styles.card}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
          </a>
        </Link>
    )
}