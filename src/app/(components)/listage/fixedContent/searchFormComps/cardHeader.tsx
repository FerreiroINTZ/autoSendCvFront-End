"use client"

import styles from "../../styles/searchFormCompStyles/searchFormComp.module.scss"

import Image from "next/image"
import icon from "@icons/reviewIcon.png"
import { Dispatch, SetStateAction } from "react"

function cardHeader({changeCard}: {changeCard: Dispatch<SetStateAction<string>>}) {
  return (
    <div id={styles.cardHeader}>
        <div id={styles.titleContainer}>
            <Image src={icon} alt="search icon" />
            <p>PROCURAR VAGAS</p>
        </div>
        <button 
            type="button" 
            id={styles.closeBtn}
            onClick={() => changeCard("")}>X</button>
    </div>
  )
}

export default cardHeader