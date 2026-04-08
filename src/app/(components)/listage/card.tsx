import Image from "next/image"

import styles from "./styles/_card.module.scss"
import {Vancancy} from "../../(functions)/getList"

import linkIcon from "@icons/link.png"

function card({
  title, 
  paridade,
  area,
  regiao,
  link
}: Vancancy) {
  return (
    <>
    <input className={styles.radionBuntonVac} type="radio" id={title} name="vancanciesCards"/>
    <label htmlFor={title} className={styles.cardContainer} data-paridade={`${paridade}`}>
      
      <div className={styles.mainInfos}>
        
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.area_regiao}>{area} - {regiao}</p>
          <a href={link} className={styles.link}>
            <Image src={linkIcon} alt="link icon" title={link}/>
          </a>
        </div>
        
        <ul className={styles.infos}>
          <li>Gabriel</li>
        </ul>
        
        <span className={styles.cardLight}></span>
      </div>

      <div className={styles.expendendInfos}>
          <div className={styles.block}>
            <p className={styles.label}>SUMARY</p>
            <p className={styles.value}>Boa vaga geral, mas não específica para sua stack.</p>
          </div>
      </div>
      
    </label>
    </>
  )
}

export default card