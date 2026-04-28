"use client"

import styles from "./styles/_card.module.scss"
import { MouseEvent, useState } from "react"
import {useRouter} from "next/navigation"

function acessedCard({id, acessed, erased}: {id:number, acessed: string, erased?: boolean}) {
    const router = useRouter()
    const [isChanding, setIsChanding] = useState(false)

    async function changeAcessedState(e: MouseEvent){
        if(!isChanding){
            // setIsChanding(() => true)
            try{
                const element = e.target as HTMLDivElement
                const state = element.title
                console.log(state)
                const resp = await fetch(`http://localhost:3000/change?id=${id}&state=${acessed}`, {
                    method: "GET",
                    mode: "cors"
                })
                console.log(resp)
                const {status} = resp
                console.log(status)
                if(status == 200){
                    console.log("Mudado!")
                    router.refresh()
                    return 
                }
                console.error("Erro ao mudar!")
                setIsChanding(() => false)
            }catch(e){
                console.log(e)
                console.log("Erro!")
            }
        }else{
            console.log("nada")
        }
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