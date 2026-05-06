import styles from "../../styles/filters/ordemParidade.module.scss"

import {useFormContext} from "react-hook-form"
import { useEffect } from "react"
import Image from "next/image"

import melhoresIcon from "@icons/filterIcons/bestIcon.png"
import pioresIcon from "@icons/filterIcons/badIcon.png"

function ordemParidade({mark}: {mark: string}) {

    const {register, watch} = useFormContext()

    const slw = watch("ordemParidade")

    useEffect(() =>{
        console.log(slw)
    }, [slw])

  return (
    <div id={styles.ordemparidade} className={mark}>
        <p id={styles.title}>ORDEM PARIDADE</p>
        <div>
            <input id="ordemParidade" type="checkbox" {...register("ordemParidade")} />
            <label 
                className={styles[slw ? "melhoresStyle" : "pioresStyle"]} 
                id={styles.optionCardInput}
                htmlFor="ordemParidade" 
                >
                <p>{slw ? "MELHORES" : "PIORES"}</p>
                <Image src={slw ? melhoresIcon : pioresIcon} alt="" />
                <span id={styles.light}></span>
            </label>
        </div>
    </div>
  )
}

export default ordemParidade