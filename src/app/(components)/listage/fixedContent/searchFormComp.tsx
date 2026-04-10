'use client'

import styles from "../styles/searchFormCompStyles/searchFormComp.module.scss"

import {Dispatch, SetStateAction} from "react"

import CardHeaderComp from "./searchFormComps/cardHeader"
import SitesAvailableComp from "./searchFormComps/sitesAvailable"
import Qtd_Ai_Comp from "./searchFormComps/qtd_aiComp"

function searchFormComp(
    {changeCard}: {changeCard: Dispatch<SetStateAction<string>>}
) {
  
  const defaultPrompt = "Lorem ipsum dolor sit amet consectetur. Sed sollicitudin tempor lectus ipsum euismod dolor. Aliquam accumsan lacus a commodo bibendum amet. Aliquet mauris condimentum ac sed. Ultricies dolor in eget viverra aenean at. Venenatis vulputate lobortis amet risus. Mollis amet porttitor sit sagittis justo."

    return (
    <div id={styles.searchFormComp} onClick={() => changeCard("")}>
        <form onClick={e => e.stopPropagation()}>

            <CardHeaderComp changeCard={changeCard}/>

            <div id={styles.fieldsContainer}>
                
                <div id={styles.prompt_lists}>
                    <div id={styles.promptContainer}>
                        <p>PROMPT</p>
                        <textarea defaultValue={defaultPrompt}></textarea>
                    </div>
                </div>
                
                <div id={styles.selects}>
                
                    <SitesAvailableComp />

                    <div id={styles.ai_qtd_sendBtn}>
                            <Qtd_Ai_Comp />
                            <button id={styles.startSearch}>INICIAR BUSCA</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
  )
}

export default searchFormComp