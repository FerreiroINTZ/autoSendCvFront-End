import styles from "@generalStyles/filters/paridade.module.scss"

type Paridade = {
    paridade: string,
    qtd: number
}

// ===================

const Card = ({paridade, qtd}: Paridade) =>{

    const vall = paridade.charAt(0).toUpperCase() + paridade.slice(1)

    return(
        <li className={styles.card} data-paridade={paridade}>
            <div></div>
            <p>
                <span className={styles.paridadeValue}>{vall}</span>
                <span className={styles.paridadeQtd}>{qtd}</span></p>
        </li>
    )
}

async function pariade({mark}: {mark: string}) {

    const paridades = async (): Promise<Paridade[]> => new Promise((resolve) =>{
        const slw = [
            {
                paridade: "perfeito",
                qtd: 10
            },
            {
                paridade: "bom",
                qtd: 10
            },
            {
                paridade: "ruim",
                qtd: 10
            },
            {
                paridade: "pessimo",
                qtd: 10
            },
        ]
        resolve(slw)
    })

    const data = await paridades()

    return (
    <div id={styles.paridadeContainer} className={mark}>
        <p id={styles.title}>PARIDADE</p>
        <ul>
            {data.map((x, index) => 
                <Card 
                    key={index}
                    paridade={x.paridade}
                    qtd={x.qtd}
                />
            )}
        </ul>
    </div>
  )
}

export default pariade