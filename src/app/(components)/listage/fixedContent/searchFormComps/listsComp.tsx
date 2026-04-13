"use client"

import { useState } from "react"
import styles from "../../styles/searchFormCompStyles/searchFormComp.module.scss"
import {useFormContext} from "react-hook-form"


const KeyCard = ({value}: {value: string}) =>{

    return(
        <>
            <li>{value}</li>
        </>
    )
}

function listsComp({field, fieldLabel}: {field: string, fieldLabel: string}) {

    const [values, setValues] = useState(["node", "typescript", "javascript"])
    const [insertItem, setInsertItem] = useState(false)
    
    const {setValue, getValues} = useFormContext()

    function setNewItem(vall: string){
        const newList = values
        newList.push(vall)
        setValues(newList)
        setInsertItem(false)
        console.log(newList)
        setValue(field, newList, { shouldValidate: true })
    }

  return (
    <div>
        <p>{fieldLabel.toUpperCase()}</p>
        <ul className={styles.itensList}>
            {values.map((x, index) =>
                <KeyCard key={index} value={x}/>
            )}
            {!insertItem &&  
                <li>
                    <button 
                        className={styles.addItemBtn}
                        onClick={() => setInsertItem(true)}>+</button>
                </li>
            }
            {insertItem 
                && <input 
                        className={styles.inputItem}
                        onKeyDown={e => {
                            e.code == "Enter" && setNewItem((e.target as HTMLInputElement).value)
                        }} 
                        type="text" />
                    }
        </ul>
    </div>
  )
}

export default listsComp