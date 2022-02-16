import AddSpellItem from "../components/AddSpellItem";
import Layout from "../components/Layout";
import SpellItem from "../components/SpellItem";

export default function SpellItems() {
    return (
        <Layout>
            <h1>Spell Item Page</h1>
            <SpellItem />
            <AddSpellItem />
        </Layout>   
    )
}