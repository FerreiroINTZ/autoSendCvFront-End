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
  acesso,

  summary,
  keywords,
  matches,
  searchwords,
  weknesses
}: Vancancy) {
  if(acesso != "salvo"){
    console.log("\x1b[31m acesso")
    console.log(acesso, "\x1b[m")
  }
  const id = Math.random()
  return (
    <>
      <input className={styles.radionBuntonVac} type="radio" id={titulo + id} name="vancanciesCards"/>
      <label htmlFor={titulo + id} className={styles.cardContainer} data-paridade={`${paridade}`}>
      
        <div className={styles.mainInfos}>
        
          <div className={styles.titleContainer}>
            <h3 className={styles.title} title={titulo}>{titulo}</h3>
            <div className={styles.area_regiao}>
              <p>{area}</p> 
              <p>-</p> 
              <p></p>
            </div>
            <a href={link} target="_blank" className={styles.link}>
              <Image src={linkIcon} alt="link icon" title={link}/>
            </a>
          </div>
        
        <ul className={styles.infos}>
          <li className={styles.salarioContainer}><Image src={salarioIcon} alt="" /><p>{salario}</p></li>
          <li className={styles.empresaContainer} title={empresa}><Image src={empresaIcon} alt="" /><p>{empresa}</p></li>
          <li className={styles.siteContainer}><Image src={siteIcon} alt="" /><p>{site}</p></li>
          <li className={styles.dt_publicacaoContainer}><Image src={dt_publIicon} alt="" /><p>{dt_publicacao}</p></li>
        </ul>
        
        <div className={styles.sideInfos_actions}>
          <DownArrow styles={styles}/>
          <div className={styles.wrapper_viewCard_state}>
            <p className={styles.viewCardText}><button>VER MAIS</button></p>
            <div className={`${styles.state} ${styles[`currAcess-${acesso}`]}`}data-paridade={paridade}>
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
        summary={summary}
        keywords={keywords}
        matches={matches}
        searchwords={searchwords}
        weknesses={weknesses}
      />
      
    </label>
    </>
  )
}

export default card