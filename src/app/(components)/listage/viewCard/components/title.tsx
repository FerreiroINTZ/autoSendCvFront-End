import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"
import {ViewCard} from "@Types/viewCardTypes"

import Image from "next/image"
import salarioIcon from "@icons/money.png"
import empresaIcon from "@icons/empresa.png"
import siteIcon from "@icons/site.png"
import jobIdIcon from "@icons/jonbIdIcon.png"
import favoritedIcon from "@icons/favoritedIcon.png"
import notFavoritedIcon from "@icons/notFavoritedIcon.png"

function title(
  {
    titulo, 
    site,
    area,
    disponibilidade,
    empresa,
    favoritado,
    jobId,
    last_check,
    regiao,
    salario
  }: ViewCard) {
  return (
    <div 
      id={styles.mainInfoContainer}>
      <div id={styles.titleContainer}>
        <h2>{titulo}</h2>
        <div id={styles.area_regiao}>
          <p>{area}</p> - <p>{regiao}</p>
        </div>
      </div>

      <ul id={styles.infosContainer}>
        <li>
          <Image 
            className={styles.img} 
            src={salarioIcon} 
            alt="icone de salario" />
          <p>{salario}</p>
        </li>
        <li>
          <Image 
            className={styles.img} 
            src={siteIcon} 
            alt="icone de site" />
          <p>{site}</p>
        </li>
        <li>
          <Image 
            className={styles.img} 
            src={empresaIcon} 
            alt="icone de empresa" />
          <p>{empresa}</p>
        </li>
        <li>
          <Image 
            className={styles.img} 
            src={jobIdIcon} 
            alt="icone de jobId" />
          <p>{"JOBiD"}</p>
        </li>
      </ul>

      <button
        title={favoritado ? "desfavoritar" : "favoritar"} 
        id={styles.favoritadoContainer} 
        data-favoritado={`${favoritado}`}>
        <Image 
          src={favoritado ? favoritedIcon : notFavoritedIcon} 
          alt="botao de favoritos"/>
        <p>{favoritado ? "FAVORITADO" : "NAO FAVORITADO"}</p>
      </button>
    </div>
  )
}

export default title