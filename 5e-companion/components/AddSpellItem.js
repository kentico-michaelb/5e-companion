import { useState } from "react"
import SpellItem from "./SpellItem"

export default function AddSpellItem(){
    const [forms, setForms] = useState([])

    const handleClick = () => {
        let formArr = [...forms]
        formArr.push(<div key={Date.now()}><SpellItem /></div>)
        setForms(formArr)
    }

    return (
        <>
            {forms.map(form => form)}
            <button onClick={handleClick}>Add Spell Item</button>
        </>
 
    )
}