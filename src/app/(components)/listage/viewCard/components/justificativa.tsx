import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"

function justificativa({justificativa}: {justificativa: string}) {
  return (
    <div id={styles.justificativaContainer}>
        <h3>JUTIFICATIVA</h3>
        <p>{justificativa}</p>
    </div>
  )
}

export default justificativa