import { useState } from 'react';
import  { d20 }  from '../utils/dice';
import { calculateModifier } from '../utils/modifierCalc';
import styles from '../styles/Home.module.css';


export default function MonsterSearch() {
    const [name, setName] = useState(null)
    const [data, setData] = useState(null)
    const [rolls, setRolls] = useState([]);
    const [numMonsters, setNumMonsters] = useState(0);
    const [stat, setStat] = useState(0)

    const BASE_API = 'https://www.dnd5eapi.co/api/'
  
    function getMonster(event){
        event.preventDefault()
        if (name){
            fetch(`${BASE_API}monsters/${name.toLowerCase()}`)
                .then((res) => res.json())
                .then((data) => {
                setData(data)
            }
            )
        }
    }

    function rollForMonsters(monsters, stat) {
        console.log('stat' + stat)
        const modifier = calculateModifier(stat)
        let rolls = Array()
        for (let index = 0; index < monsters; index++) { 
            const roll = d20()
            console.log(roll + ' mod:' + modifier)
            rolls.push(roll+modifier) 
        }
        setRolls(rolls)
    }


        return (
            <div className={styles.card}>
            <form onSubmit={getMonster}>
            <label>
                Enter Monster Name:
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <input type="submit" />   
            </label>
            </form>
            {data &&
                <div>
                    <form>
                        <label>{data.name}</label>
                        <label>Saving Throw Type:
                            <select onChange={e => setStat(e.target.value)}>
                                <option value={data.strength}>STR</option>
                                <option value={data.dexterity}>DEX</option>
                                <option value={data.constitution}>CON</option>
                                <option value={data.wisdom}>WIS</option>
                                <option value={data.intelligence}>INT</option>
                                <option value={data.charisma}>CHA</option>
                            </select>
                        </label>
                        <label>
                            # of Monsters:
                            <input type="number" onInput={e => setNumMonsters(e.target.value)}></input>
                        </label>
                        <button type="button" onClick={() => rollForMonsters(numMonsters, Number(stat))}>
                            Roll
                        </button>
                        <p>{numMonsters} to calculate</p>
                        <div>
                            {rolls.map((roll, index) => (<div key={index}>{data.name} {index +1}&apos;s saving throw: {roll}</div>))}
                        </div>
                    </form>

                    <h1>{data.name}</h1>
                    <h2>HP: {data.hit_points}</h2>
                    <ul>
                        <li>STR: {data.strength}</li>
                        <li>DEX: {data.dexterity}</li>
                        <li>CON: {data.constitution}</li>
                        <li>WIS: {data.wisdom}</li>
                        <li>INT: {data.intelligence}</li>
                        <li>CHA: {data.charisma}</li>
                    </ul>
                </div>
            }
            </div>
        )
   
}