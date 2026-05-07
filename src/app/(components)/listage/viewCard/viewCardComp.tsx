"use client"

import styles from "../styles/viewCardSrtyles/viewCardStyles.module.scss"

import {useRouter} from "next/navigation"
import gsap from "gsap"
import {useEffect} from "react"

import Title from "./components/title"
import FullDescription from "./components/fullDescription"
import InfosComp from "./components/infos"
import JustificativaComp from "./components/justificativa"
import Acess_Dates_Component from "./components/acess_date_component"
import FixedButton from "./fixedContent/fixedButton"


function viewCardComp({data}: {data: any}) {
    // console.log(data)

    useEffect(() =>{
        const cntx = gsap.context(() =>{
            const tmln = gsap.timeline()
            tmln.to(".viewContainerAnimation", 
                {
                    opacity: 1,
                    duration: .3
                }
            )

            tmln.fromTo(".viewContainer", 
                {
                    y: 50
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "power1.out",
                    duration: .5
                }
            )
        })

        return () => cntx.clear()
    })

    const router = useRouter()

    function changeRoute(){
        router.push("/")
    }

  return (
    <div 
        id={styles.viewCardContainer}
        onClick={changeRoute}
        // className="viewContainerAnimation"
        >
        <div 
            data-paridade={`${data.paridade}`}
            id={styles.cardViewer} 
            onClick={e => e.stopPropagation()}
            // className="viewContainer"
            >
                <Title 
                    titulo={data.titulo}
                    salario={data.salario}
                    empresa={data.empresa}
                    site={data.plataforma}
                    jobId={data.jobid}
                    favoritado={data.favoritado}
                    disponibilidade={data.disponibilidade}
                    last_check={data.last_disp_analysis}
                    area={data.area}
                    cidade={data.cidade}
                    link={data.link}
                    />
                    
                <Acess_Dates_Component 
                    id={data.id} 
                    acesso={data.acesso}
                    />

                {/* <SearchWordsComp /> */}

                <InfosComp 
                    matches={data.matches}
                    summary={data.summary}
                    weaknesses={data.weaknesses}
                    />

                <JustificativaComp justificativa={data.justificativa}/>
                
                <FullDescription desc={data.descricao}/>

        </div>

        <FixedButton jobId={data.jobid}/>
    </div>
  )
}

export default viewCardComp