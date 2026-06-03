"use client"

import Image from "next/image"
import linkIcon from "@icons/link.png"
import changeAcessState from "@serverFunctions/changeAcessState"

import {useRouter} from "next/navigation"
import {AnchorHTMLAttributes, MouseEventHandler, useState} from "react"

function linkToVacancyCard({
    link, 
    styles, 
    id, 
    acessed
}: {
    link: string, 
    styles: any,
    id: number,
    acessed: string
}) {
  
    const router = useRouter()
    const [isChanding, setIsChanding] = useState(false)
    
    const changeAcess = async (e: React.MouseEvent<HTMLAnchorElement>) =>{
        e.preventDefault()
        let canChange: number | undefined = 0
        if(acessed == "salvo"){
            canChange = await changeAcessState(
                e as any, 
                isChanding, 
                setIsChanding, 
                router, 
                id, 
                "acessado"
            )
        }
            console.log("mudado!")
            console.log(acessed)
            window.open(link)
            if(canChange){
                console.log("refresh")
                router.refresh()
            }
    }
        
    return (
    <a 
        href={link} 
        target="_blank" 
        className={styles.link}
        onClick={changeAcess}
        >
        <Image src={linkIcon} alt="link icon" title={link}/>
    </a>
  )
}

export default linkToVacancyCard