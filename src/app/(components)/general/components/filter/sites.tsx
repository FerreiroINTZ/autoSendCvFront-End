import styles from "@generalStyles/filters/sites.module.scss"

type Sites = {
    site: string,
    qtd: number
}

// ===================

const Card = ({site, qtd}: Sites) =>{

    const siteFormatado = site.charAt(0).toUpperCase() + site.slice(1)

    return(
        <li className={styles.card} data-site={site}>
            <div></div>
            <p>
                <span className={styles.siteValue}>{siteFormatado}</span>
                <span className={styles.siteQtd}>{qtd}</span>
            </p>
        </li>
    )
}

async function sites({mark}: {mark: string}) {

    const sites = async (): Promise<Sites[]> => new Promise((resolve) =>{
        const slw = [
            {
                site: "linkedin",
                qtd: 10
            },
            {
                site: "indeed",
                qtd: 10
            },
            {
                site: "infojobs",
                qtd: 10
            },
            {
                site: "catho",
                qtd: 10
            },
        ]
        resolve(slw)
    })

    const data = await sites()

    return (
    <div id={styles.sitesContainer} className={mark}>
        <p id={styles.title}>SITES</p>
        <ul>
            {data.map((x, index) => 
                <Card 
                    key={index}
                    site={x.site}
                    qtd={x.qtd}
                />
            )}
        </ul>
    </div>
  )
}

export default sites