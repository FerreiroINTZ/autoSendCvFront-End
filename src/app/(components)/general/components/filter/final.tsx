import styles from "../../styles/filters/filterActions.module.scss"

import {useFormContext} from "react-hook-form"

function final({mark}: {mark: string}) {
  
  const {reset} = useFormContext()
  
  function clear(){
    console.log("nas")
    reset()
  }

  return (
    <div id={styles.filterActions} className={mark}>
        <div id={styles.mainActionsContainer}>
            <button id={styles.clearFilters} onClick={clear}>REMOVER</button>
            <button id={styles.applyFilters}>FILTRAR</button>
        </div>
        <button id={styles.goToTop}>SUBIR</button>
    </div>
  )
}

export default final