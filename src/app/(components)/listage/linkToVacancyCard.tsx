"use client"

import Image from "next/image"
import linkIcon from "@icons/link.png"
import changeAcessState from "@serverFunctions/changeAcessState"
import teste from "@serverFunctions/teste"

import {useRouter} from "next/navigation"
import {useState} from "react"

function linkToVacancyCard({
    link, 
    styles, 
    id, 
    acessed,
    setData
}: {
    link: string, 
    styles: any,
    id: number,
    acessed: string,
    setData: any
}) {
  
    const router = useRouter()
    const [isChanding, setIsChanding] = useState(false)

    const changeAcess = async (e: React.MouseEvent<HTMLAnchorElement>) =>{
        e.preventDefault()
        let data: any;
        try{

            if(acessed == "salvo"){
                data = await changeAcessState(id, "acessado")
            }
            console.log("\x1b[31m Mudado o estado da vaga: ", id, "!\x1b[0m")
            console.log(data)
            window.open(link)
            if(data){
                console.log("refresh")
                setData(data)
            }else{
                throw new Error("algum erro ao pegar os dados novamente")
            }
        }catch(e){
            console.log(e)
            console.log("erro!")
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