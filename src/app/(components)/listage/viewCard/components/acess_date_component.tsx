import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"

import {useRouter} from "next/navigation"

function acess_date_component({acesso, id}: {acesso: string, id: number}) {

    const router = useRouter()

    async function changeAcessedState(state: string){
        if(state == acesso){
            return
        }
        const resp = await fetch(`http://localhost:3000/change?id=${id}&state=${state}`, {
                    method: "GET",
                    mode: "cors"
                })
        const data = await resp.text()
        console.log(data)
        router.refresh()
    }

  return (
    <div id={styles.acess_dates_styles}>
        <div id={styles.acessContainer}>
            <h3>ESTADO: </h3>
            <div id={styles.acessCards} data-acesso={acesso}>
                <span 
                    title="salvo"
                    onClick={() => changeAcessedState("salvo")} 
                    id={styles.salvoCard}></span>
                <span
                    title="acessado"
                    onClick={() => changeAcessedState("acessado")}
                    id={styles.acessadoCard}></span>
                <span
                    title="aplicado"
                    onClick={() => changeAcessedState("aplicado")}
                    id={styles.aplicadoCard}></span>
            </div>
        </div>

        <div id={styles.datesContainer}>
            <h3>DATAS:</h3>
            <div id={styles.datesWrapper}>
                <p>
                    <span>Registro:</span> 
                    <span>{"10/02/2026"}</span>
                </p>
                <p>
                    <span>Publicado:</span> 
                    <span>{"02/05.2026"}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default acess_date_component