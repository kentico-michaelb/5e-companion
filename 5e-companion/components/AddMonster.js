import { useState } from "react"
import MonsterSearch from "./MonsterSearch"

export default function AddMonster(){
    const [forms, setForms] = useState([])

    const handleClick = () => {
        let formArr = [...forms]
        formArr.push(<div key={Date.now()}><MonsterSearch /></div>)
        setForms(formArr)
    }

    return (
        <>
            {forms.map(form => form)}
            <button onClick={handleClick}>Add Monster</button>
        </>
 
    )
}