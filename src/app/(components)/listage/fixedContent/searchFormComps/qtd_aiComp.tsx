'use client'

import styles from "../../styles/searchFormCompStyles/searchFormComp.module.scss"
import {useFormContext} from "react-hook-form"
import {FormFields} from "../searchFormComp"

function qtd_aiComp() {

  const {register} = useFormContext<FormFields>()

  return (
    <div id={styles["ai_qtd-container"]}>
      <div id={styles.qtdContainer}>
        <p>QUANTIDADES</p>
        <div id={styles.qtdSidesContaier}>
            <div id={styles.vagasContainer}>
                <label>VAGAS:</label>
                <input
                    type="number" 
                  {...register("qtdVanancies", {
                    required: true,
                    max: 100,
                    value: 10
                  })}/>
            </div>
            <div id={styles.paginasContainer}>
                <label>PAGINAS:</label>
                <input
                    type="number" 
                  {...register("qtdPages", {
                    required: true,
                    max: 50,
                    value: 1
                  })}/>
            </div>
        </div>
      </div>
      <div  id={styles.aiTokenContainer}>
        <p>AI TOKEN</p>
        <input 
          type="text" 
          placeholder="asnnih8324y8243..."
          {...register("aiToken", {
            required: true
          })}/>
      </div>
    </div>
  );
}

export default qtd_aiComp;
