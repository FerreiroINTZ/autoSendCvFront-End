import { useEffect } from "react"
import styles from "../../styles/filters/estado.module.scss"

import {useFormContext} from "react-hook-form"
import {useReducer} from "react"

const Card = ({
    value, 
    changeValue,
    selected
}: {
    value: string, 
    changeValue: (e: any)=> void,
    selected: boolean
}) =>{
    return (
        <>
            <button
                type="button"
                data-selected={selected}
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

  function changeAcessState(curr: string[], evento: Event): string[]{
    const target = evento.target as HTMLButtonElement
    const vall = target.value
    let newArray: string[] = []
    if(curr.includes(vall)){
        newArray = curr.filter(x => x != vall)
    }else{
        newArray = [...curr, vall]
    }
    setValue("acesso", newArray)
    return newArray
  }
  const [acessState, setAcessState] = useReducer(changeAcessState, getValues("acesso"))
    const states = ["salvo", "acessado", "aplicado"]
  
    useEffect(() =>{
        console.log(acessState)
    }, [acessState])

    return (
    <div id={styles.estadoContainer} className={mark}>
        <p id={styles.title}>STATE</p>
        <div id={styles.statesWrapper}>
            {states.map((x, index) =>
                <Card 
                    key={index} 
                    value={x}
                    changeValue={setAcessState}
                    selected={acessState.includes(x)}/>
            )}
        </div>  
    </div>
  )
}

export default estado