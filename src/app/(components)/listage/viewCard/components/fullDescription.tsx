import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"

function fullDescription({desc}: {desc: string}) {
  return (
    <div id={styles.fullDescriptionContainer}>
        <h3>Descricao Completa</h3>
        <p>{desc}</p>
    </div>
  )
}

export default fullDescription