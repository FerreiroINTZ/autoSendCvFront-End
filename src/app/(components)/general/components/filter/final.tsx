import styles from "../../styles/filters/filterActions.module.scss"

function final({mark}: {mark: string}) {
  return (
    <div id={styles.filterActions} className={mark}>
        <div id={styles.mainActionsContainer}>
            <button id={styles.clearFilters}>REMOVER</button>
            <button id={styles.applyFilters}>FILTRAR</button>
        </div>
        <button id={styles.goToTop}>SUBIR</button>
    </div>
  )
}

export default final