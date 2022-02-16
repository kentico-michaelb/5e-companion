import { useState } from 'react';
import { roll } from '../utils/dice'

export default function SpellItem(){
    const [itemType, setItemType] = useState('scroll')
    const [charges, setCharges] = useState()
    const [randomSpell, setRandomSpell] = useState(null)
    const [spellLevel, setSpellLevel] = useState()

    const BASE_API = 'https://www.dnd5eapi.co/api/'

    function getItems(event){
        event.preventDefault()
        if(spellLevel){
            fetch(`${BASE_API}spells/?level=${spellLevel}`)
                .then((res) => res.json())
                .then((data) => {
                    const randomSpell = roll(data.count)
                    setRandomSpell(data.results[randomSpell].name)
                })
        }
    }

    return (
        <div>
            <form onSubmit={getItems}>
                <select onChange={(e) => {setItemType(e.target.value)}}>
                    <option value="scroll">Scroll</option>
                    <option value="wand" >Wand</option>
                </select>
                {itemType == 'wand' &&
                    <label>Charges
                        <input type="number" onChange={(e) => {setCharges(e.target.value)}}/>
                    </label>
                }
                <label>
                    Spell level:
                    <input type="number" max="9" min="0" onChange={(e) => setSpellLevel(e.target.value)} required/>
                </label>
                <input type="submit" value="Generate Spell Items"/>
            </form>
            {randomSpell &&
                <div>
                    <p>{itemType} of {randomSpell}
                    {charges && <span> with {charges} charges</span>}  
                    </p>
                    
                </div>
            }

        </div>

        
    )
}