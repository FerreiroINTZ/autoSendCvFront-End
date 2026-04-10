'use client'

import styles from "../../styles/searchFormCompStyles/searchFormComp.module.scss"

function qtd_aiComp() {
  return (
    <div id={styles["ai_qtd-container"]}>
      <div id={styles.qtdContainer}>
        <p>QUANTIDADES</p>
        <div id={styles.qtdSidesContaier}>
            <div id={styles.vagasContainer}>
                <label>VAGAS:</label>
                <input type="number" max="100" defaultValue="10"/>
            </div>``
            <div id={styles.paginasContainer}>
                <label>PAGINAS:</label>
                <input type="number" max="100" defaultValue="1"/>
            </div>
        </div>
      </div>
      <div  id={styles.aiTokenContainer}>
        <p>AI TOKEN</p>
        <input type="text" placeholder="asnnih8324y8243..."/>
      </div>
    </div>
  );
}

export default qtd_aiComp;
