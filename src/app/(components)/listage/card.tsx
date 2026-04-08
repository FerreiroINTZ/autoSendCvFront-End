import styles from "./styles/_card.module.scss"
import {Vancancy} from "../../(functions)/getList"

function card({
  title, 
  paridade
}: Vancancy) {
  return (
    <div className={styles.cardContainer} data-paridade={`${paridade}`}>
      <h3>{title}</h3>
      <span className={styles.cardLight}></span>
    </div>
  )
}

export default card