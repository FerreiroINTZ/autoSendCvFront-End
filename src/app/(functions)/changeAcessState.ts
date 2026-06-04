"use server"

import getVacancies from "./getList"

export default async function changeAcessedState(
    id: number, 
    acessed: string
){
    console.log("\x1b[32m mmudando! \x1b[0m")
            // setIsChanding(() => true)
            // return "slw"
            try{
                const resp = await fetch(`http://localhost:3000/change?id=${id}&state=${acessed}`, {
                    method: "GET",
                    mode: "cors"
                })
                // console.log("resp: ")
                // console.log(resp)
                const {status} = resp
                if(status != 200){
                    throw new Error("Erro ao mudar o estado da vaga!")
                }
                console.log(status)
                console.log("Mudado o estado da vaga: ", id, "!")
                console.error("Erro ao mudar!")
                
                
                const data = await getVacancies()
                return data
            }catch(e){
                console.log(e)
                console.log("Erro!")
                return []
            }
    }