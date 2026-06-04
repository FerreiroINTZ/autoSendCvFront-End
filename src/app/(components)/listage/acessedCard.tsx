"use client"

import styles from "./styles/_card.module.scss"
import { MouseEvent, useState } from "react"
import {useRouter} from "next/navigation"
import changeAcessState from "@serverFunctions/changeAcessState"

function acessedCard(
    {id, acessed, erased, setData}: 
    {id:number, acessed: string, erased?: boolean, setData: any}
) {
    const router = useRouter()
    const [isChanding, setIsChanding] = useState(false)

    const changeAcessedState = async (e: any) => {
        const data = await changeAcessState(id, acessed)
        setData(data)
    }

  if(!erased){
        return (
            <div
                onClick={changeAcessedState} 
                title={acessed} 
                className={styles[acessed]}></div>
        )
  }else{
    return (
            <div 
                onClick={changeAcessedState}
                title={acessed} 
                className={`${styles[acessed]} ${styles.erased}`}></div>
        )
  }
}

export default acessedCard