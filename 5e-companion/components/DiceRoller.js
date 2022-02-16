import { useState } from 'react'
import { d4, d6, d8, d10, d12, d20, d100 } from '../utils/dice'
import styles from '../styles/Home.module.css'

export default function DiceRoller(){
    const [result, setResult] = useState(null)

    return (
        <>
        <div className={styles.footer}>
            <button onClick={(e) => {setResult(d4())}}>d4</button>
            <button onClick={(e) => {setResult(d6())}}>d6</button>
            <button onClick={(e) => {setResult(d8())}}>d8</button>
            <button onClick={(e) => {setResult(d10())}}>d10</button>
            <button onClick={(e) => {setResult(d12())}}>d12</button>
            <button onClick={(e) => {setResult(d20())}}>d20</button>
            <button onClick={(e) => {setResult(d100())}}>d100</button>
        </div>
        <div className={styles.footer}>
                <span className={styles.code}>Ad-Hoc Roll: {result}</span>
        </div>
        </>
    )
}