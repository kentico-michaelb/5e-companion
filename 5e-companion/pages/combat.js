import AddMonster from "../components/AddMonster";
import Layout from "../components/Layout";
import MonsterSearch from "../components/MonsterSearch";
import styles from '../styles/Home.module.css'

export default function Combat() {
    return (
        <Layout>
            <h1>COMBAT TOOLS</h1>
            <div className={styles.grid}>
                <MonsterSearch />
                <AddMonster />
            </div>
        </Layout>
    )
}