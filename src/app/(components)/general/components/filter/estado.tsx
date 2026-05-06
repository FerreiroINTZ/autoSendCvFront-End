import { useEffect } from "react"
import styles from "../../styles/filters/estado.module.scss"

import {useFormContext} from "react-hook-form"

const Card = ({value, changeValue}: {value: string, changeValue: (e: any)=> void}) =>{
    return (
        <>
            <button
                onClick={changeValue}
                value={value}
                id={styles[`${value}Btn`]}
            >
                {value}
            </button>
        </>
    )
}

function estado({mark}: {mark:string}) {
  
  const {setValue, getValues, watch} = useFormContext()
  
  function changeValue(e: any){
        const element = e.target as HTMLButtonElement
        const value = element.value
        
        const currVall = getValues("acessState")
        console.log("currVall")
        console.log(currVall)

        if(currVall == value){
            console.log("atual!")
            return
        }
        
        setValue("acessState", value)
    }

    
      const value = watch("acessState")
      const states = ["salvo", "acessado", "aplicado"]
  
      useEffect(() =>{
        
      }, [value])

    return (
    <div id={styles.estadoContainer} className={mark}>
        <p id={styles.title}>STATE</p>
        <div id={styles.statesWrapper} data-selected={value}>
            {states.map((x, index) =>
                <Card 
                    key={index} 
                    value={x}
                    changeValue={changeValue}/>
            )}
        </div>  
    </div>
  )
}

export default estado