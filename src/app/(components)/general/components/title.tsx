import styles from "../styles/_title.module.scss"
import SwapIcon from "@icons/swapIcon.png"
import Image from "next/image"

function title() {
  return (
    <div id={styles.title}>
      <h1><span>CV</span> HUB</h1>
      <div id={styles.swapContainer}>
        <div id={styles.swapWrapper}>
          <div><Image src={SwapIcon} alt="swap icon"/></div>
          <p>DASHBOARD</p>
        </div>
      </div>
    </div>
  )
}

export default title