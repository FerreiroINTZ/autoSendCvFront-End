import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"
import {ViewCard} from "@Types/viewCardTypes"

import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {useState} from "react"

import changeAcessState from "@serverFunctions/changeAcessState"

import salarioIcon from "@icons/money.png"
import empresaIcon from "@icons/biggerIcons/empresa.png"
import siteIcon from "@icons/biggerIcons/site.png"
import jobIdIcon from "@icons/biggerIcons/jonbIdIcon.png"
import favoritedIcon from "@icons/favoritedIcon.png"
import notFavoritedIcon from "@icons/notFavoritedIcon.png"
import acessivelIcon from "@icons/biggerIcons/bigLikeIcon.png"
import naoAcessivelIcon from "@icons/biggerIcons/bigUnlikeIcon.png"
import linkIcon from "@icons/link.png"

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
    cidade,
    salario,
    link
  }: ViewCard) {

    const router = useRouter()
    const [isChanding, setIsChanding] = useState(false)

    async function changeFavorited(){
      const resp = await fetch(`http://localhost:3000/change/favorited/${jobId}`)

      if(resp.ok){
        console.log("alterado!")
        router.refresh()
        return
      }
      console.log("erro ao alterar favoritado")

    }

    async function changeDisponibilidade(){
      const resp = await fetch(`http://localhost:3000/change/disponibilidade/${jobId}`)

      if(resp.ok){
        console.log("alterado!")
        router.refresh()
        return
      }
      console.log("erro ao alterar favoritado")
    }

    // const changeAcessed = async (e: any) => 
    //   await changeAcessState(
    //     e,
    //     isChanding,
    //     setIsChanding,
    //     id,
    //     acessed
    //   )

  return (
    <div 
      id={styles.mainInfoContainer}>
      <div id={styles.titleContainer}>
        <h2 title={titulo}>{titulo}</h2>
        <div id={styles.area_regiao}>
          <p title={area}>{area}</p> <span>-</span> <p title={cidade}>{cidade}</p>
          <Link id={styles.link} href={link} target="_blank">
            <Image src={linkIcon} alt="icone de link" />
          </Link>
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
          <p>{jobId}</p>
        </li>
      </ul>

      <button
        title={favoritado ? "desfavoritar" : "favoritar"} 
        id={styles.favoritadoContainer} 
        data-favoritado={`${favoritado}`}
        onClick={changeFavorited}
        >
        <Image 
          src={favoritado ? favoritedIcon : notFavoritedIcon} 
          alt="botao de favoritos"/>
        <p>{favoritado ? "FAVORITADO" : "NAO FAVORITADO"}</p>
      </button>

      <div id={styles.acessivelContainer}>
        <button
          onClick={changeDisponibilidade} 
          title="mudar disponibilidade" 
          id={styles.icon} 
          data-disponibilidade={disponibilidade}>
          <Image
            src={disponibilidade ? acessivelIcon : naoAcessivelIcon} 
            alt="icone sobre acessibilidade da vaga" />
            <span>{disponibilidade ? "DISPONIVEL" : "INDISPONIVEL"}</span>
        </button>
        <p id={styles.last_check}>{"4 dias atras"}</p>
      </div>
    </div>
  )
}

export default title