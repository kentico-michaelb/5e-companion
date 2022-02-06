import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Navigation(){
    return (
        <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/combat">Combat</Link>
            {/* <Link href="/merchants">Merchants</Link> */}
            <Link href="/spell-items">Spell Items</Link>
        </nav>
    )
}