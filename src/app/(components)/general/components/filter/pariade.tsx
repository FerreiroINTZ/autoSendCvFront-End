"use client"

import styles from "@generalStyles/filters/paridade.module.scss"

import {useFormContext} from "react-hook-form"

type Paridade = {
    paridade: string,
    qtd: number
}

// ===================

const Card = ({paridade, qtd}: Paridade) =>{

    const {register}= useFormContext()
    
    const vall = paridade.charAt(0).toUpperCase() + paridade.slice(1)

    return(
        <li className={styles.card} data-paridade={paridade}>
            <input 
                id={`paridade-${paridade}`} 
                type="checkbox" 
                value={paridade}
                {...register(`paridades`)} />
            <label 
                htmlFor={`paridade-${paridade}`} 
                className={styles.option}>
                <div className={styles.circleANDlabel}>
                    <div className={styles.circle}></div>
                    <span className={styles.paridadeValue}>{vall}</span>
                </div>
                <span className={styles.paridadeQtd}>{qtd}</span>
            </label>
        </li>
    )
}

function pariade({mark}: {mark: string}) {

    // fazer ele receber os dados pegos
    const paridades = ():Paridade[] => {
        const slw = [
            {
                paridade: "perfeito",
                qtd: 10
            },
            {
                paridade: "bom",
                qtd: 10
            },
            {
                paridade: "ruim",
                qtd: 10
            },
            {
                paridade: "pessimo",
                qtd: 10
            },
        ]
        return slw
    }

    const data = paridades()

    return (
    <div id={styles.paridadeContainer} className={mark}>
        <p id={styles.title}>PARIDADE</p>
        <ul>
            {data.map((x, index) => 
                <Card 
                    key={index}
                    paridade={x.paridade}
                    qtd={x.qtd}
                />
            )}
        </ul>
    </div>
  )
}

export default pariade