"use client"

import styles from "../../styles/filters/filterActions.module.scss"

import {useFormContext} from "react-hook-form"
import {useRouter} from "next/navigation"

function final({mark}: {mark: string}) {
  
  const {reset} = useFormContext()
  const router = useRouter()

  function clear(){
    console.log("nas")
    reset()
    router.push("/")
  }

  return (
    <div id={styles.filterActions} className={mark}>
        <div id={styles.mainActionsContainer}>
            <button id={styles.clearFilters} onClick={clear}>RESETAR</button>
            <button id={styles.applyFilters}>FILTRAR</button>
        </div>
        <a href="#formulario" id={styles.goToTop}>SUBIR</a>
    </div>
  )
}

export default final