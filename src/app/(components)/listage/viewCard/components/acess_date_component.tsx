import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"

function acess_date_component({acesso}: {acesso: string}) {
  return (
    <div id={styles.acess_dates_styles}>
        <div id={styles.acessContainer}>
            <h3>ESTADO: </h3>
            <div id={styles.acessCards} data-acesso={acesso}>
                <span id={styles.salvoCard}></span>
                <span id={styles.acessadoCard}></span>
                <span id={styles.aplicadoCard}></span>
            </div>
        </div>

        <div id={styles.datesContainer}>
            <h3>DATAS:</h3>
        </div>
    </div>
  )
}

export default acess_date_component