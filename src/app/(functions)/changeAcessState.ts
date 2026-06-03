import {useState} from "react"

// const [isChanding, setIsChanding] = useState(false)

export default async function changeAcessedState(
    e: MouseEvent, 
    isChanding: any, 
    setIsChanding: any,
    router: any,
    id: number, 
    acessed: string
){
    console.log("\x1b[32m mmudando! \x1b[0m")
        if(!isChanding){
            // setIsChanding(() => true)
            try{
                const element = e.target as HTMLDivElement
                const state = element.title
                console.log(state)
                const resp = await fetch(`http://localhost:3000/change?id=${id}&state=${acessed}`, {
                    method: "GET",
                    mode: "cors"
                })
                console.log("resp: ")
                console.log(resp)
                const {status} = resp
                console.log(status)
                if(status == 200){
                    console.log("Mudado!")
                    // router.refresh()
                    return 1
                }
                console.error("Erro ao mudar!")
                setIsChanding(() => false)
            }catch(e){
                console.log(e)
                console.log("Erro!")
                return 0
            }
        }else{
            console.log("nada")
            return 0
        }
    }