"use client"

import styles from "../styles/viewCardSrtyles/viewCardStyles.module.scss"

import {useRouter} from "next/navigation"
import gsap from "gsap"
import {useEffect} from "react"

import Title from "./components/title"


function viewCardComp({data}: {data: any}) {
    console.log(data)

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
                    site={data.site}
                    jobId={data.jobId}
                    favoritado={data.favoritado}
                    disponibilidade={data.disp}
                    last_check={data.last_check}
                    area={data.area}
                    regiao={data.regiao}
                    />
        </div>
    </div>
  )
}

export default viewCardComp