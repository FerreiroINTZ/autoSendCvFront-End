'use client'

import styles from "../styles/searchFormComp.module.scss"

import Image from "next/image"
import icon from "@icons/reviewIcon.png"

import {Dispatch, SetStateAction, useState} from "react"

type SitesAvailableDataType = {
    site: string,
    qtd: number
}

const SiteCard = ({site, qtd}: SitesAvailableDataType) =>{
        return(
            <li>
                <input 
                    type="checkbox" 
                    name="site" 
                    id={`${site}-site`}/>
                    <label htmlFor={`${site}-site`}>
                    <span>{site}</span> <span>{qtd}</span>
                </label>
            </li>
        )
    }

function searchFormComp({changeCard}: {changeCard: Dispatch<SetStateAction<string>>}) {
  
  const defaultPrompt = "Lorem ipsum dolor sit amet consectetur. Sed sollicitudin tempor lectus ipsum euismod dolor. Aliquam accumsan lacus a commodo bibendum amet. Aliquet mauris condimentum ac sed. Ultricies dolor in eget viverra aenean at. Venenatis vulputate lobortis amet risus. Mollis amet porttitor sit sagittis justo."

  const sitesAvailableData: SitesAvailableDataType[] = [
    {site: "linkedin", qtd: 10},
    {site: "indeed", qtd: 10},
    {site: "infojobs", qtd: 10},
    {site: "catho", qtd: 10},
  ]

    return (
    <div id={styles.searchFormComp} onClick={() => changeCard("")}>
        <form onClick={e => e.stopPropagation()}>
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
            <div id={styles.fieldsContainer}>
                
                <div id={styles.prompt_lists}>
                    <div>
                        <p>PROMPT</p>
                        <textarea defaultValue={defaultPrompt}></textarea>
                    </div>
                </div>
                
                <div id={styles.selects}>
                    <div id={styles.sitesAvailable}>
                        <p>SITES</p>
                        <ul id={styles.siteOptions}>
                            {sitesAvailableData.map((x, index) =>
                                <SiteCard 
                                    key={index} 
                                    site={x.site} 
                                    qtd={x.qtd}
                                />
                            )}
                        </ul>
                    </div>

                    <div id={styles.ai_qtd_sendBtn}>
                            <div id={styles["ai_qtd-container"]}>
                                <div>
                                    <p>QUANTIDADES</p>
                                    <div></div>
                                </div>
                                <div>
                                    <p>AI TOKEN</p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <button id={styles.startSearch}>INICIAR BUSCA</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
  )
}

export default searchFormComp