import Image from "next/image"

import styles from "./styles/_card.module.scss"
import {Vancancy} from "../../(functions)/getList"

import ExpandedCard from "./expandedCard/expandedCard"
import DownArrow from "./downArrow"

import linkIcon from "@icons/link.png"
import salarioIcon from "@icons/money.png"
import siteIcon from "@icons/site.png"
import empresaIcon from "@icons/empresa.png"
import dt_publIicon from "@icons/dt_publicado.png"

function card({
  titulo, 
  paridade,
  area,
  regiao,
  link,
  salario,
  site,
  empresa,
  dt_publicacao,
  state,

  sumary,
  keywords,
  match,
  search,
  weknesses
}: Vancancy) {
  console.log("titulo")
  console.log(titulo)
  return (
    <>
    <input className={styles.radionBuntonVac} type="radio" id={titulo} name="vancanciesCards"/>
    <label htmlFor={titulo} className={styles.cardContainer} data-paridade={`${paridade}`}>
      
      <div className={styles.mainInfos}>
        
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{titulo}</h3>
          <p className={styles.area_regiao}>{area} - {regiao}</p>
          <a href={link} target="_blank" className={styles.link}>
            <Image src={linkIcon} alt="link icon" title={link}/>
          </a>
        </div>
        
        <ul className={styles.infos}>
          <li><Image src={salarioIcon} alt="" /><p>{salario}</p></li>
          <li><Image src={empresaIcon} alt="" /><p>{empresa}</p></li>
          <li><Image src={siteIcon} alt="" /><p>{site}</p></li>
          <li><Image src={dt_publIicon} alt="" /><p>{dt_publicacao}</p></li>
        </ul>
        
        <div className={styles.sideInfos_actions}>
          <DownArrow styles={styles}/>
          <div className={styles.wrapper_viewCard_state}>
            <p className={styles.viewCardText}><button>VER MAIS</button></p>
            <div className={styles.state} data-paridade={paridade}>
              {["saved", "acessed", "applyed"].map((x, index) =>
              index <= state - 1
              ? <div key={index} className={styles[x]}></div>
              : <div key={index} className={`${styles[x]} ${styles.erased}`}></div>
              )}
            </div>
          </div>
        </div>
        
        <span className={styles.cardLight}></span>
      </div>

      <ExpandedCard 
        sumary={sumary}
        keywords={keywords}
        match={match}
        search={search}
        weknesses={weknesses}
      />
      
    </label>
    </>
  )
}

export default card