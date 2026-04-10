"use client"

import styles from "./styles/actionsBtn.module.scss"
import Image from "next/image"

import icon from "@icons/icon.png"
import searchIcon from "@icons/reviewIcon.png"
import reviewIcon from "@icons/searchIcon.png"

import {useState} from "react"

function actionsBtn() {
  
    const [showing, setShowing] = useState(true)
  
    return (
    <div id={styles.actionBtnContainer}>
        <div 
            onMouseLeave={() => setShowing(false)}
            id={styles.actionsElementsContainer} data-showing={showing}>
            <button onMouseEnter={() => setShowing(true)} id={styles.actionBtn}>
                <Image src={icon} alt="actions btn" />
            </button>
            {
                showing &&
                    <>
                        <button id={styles.reviewVancaniesBtn}>
                            <div className={styles.img}>
                                <Image src={reviewIcon} alt="slw" />
                            </div>
                            <p>Revisar Vagas</p>
                        </button>
                        <button id={styles.searchNewVancaniesBtn}>
                            <div className={styles.img}>
                                <Image src={searchIcon} alt="slw" />
                            </div>
                            <p>Procurar Vagas</p>
                        </button>
                    </>
            }
        </div>

        { showing && <div id={styles.bg}></div> }

    </div>
  )
}

export default actionsBtn