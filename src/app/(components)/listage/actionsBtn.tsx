"use client"

import styles from "./styles/actionsBtn.module.scss"
import Image from "next/image"

import icon from "@icons/icon.png"

import {useState} from "react"

function actionsBtn() {
  
    const [showing, setShowing] = useState(false)
  
    return (
    <div 
        onMouseLeave={() => setShowing(false)}
        id={styles.actionBtnContainer}>
        <div onMouseEnter={() => setShowing(true)} id={styles.actionBtn}>
            <Image src={icon} alt="actions btn" />
        </div>

        {showing &&
            <div>
                <button>slw</button>
                <button>tudo</button>
            </div>
        }

        <div id={styles.bg}>
            sdsd
        </div>
    </div>
  )
}

export default actionsBtn