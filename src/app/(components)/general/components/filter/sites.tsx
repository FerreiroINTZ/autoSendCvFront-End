import styles from "@generalStyles/filters/sites.module.scss"

import {useFormContext} from "react-hook-form"

type Sites = {
    site: string,
    qtd: number
}

// ===================

const Card = ({site, qtd}: Sites) =>{

    const {register} = useFormContext()

    const siteFormatado = site.charAt(0).toUpperCase() + site.slice(1)

    return(
        <li className={styles.card} data-site={site}>
            <input 
                type="checkbox" 
                id={`site-${site}`}
                value={site} 
                {...register(`sites`)}/>
            <label htmlFor={`site-${site}`}>
                <div className={styles.iconANDlabel}>
                    <div className={styles.icon}></div>
                    <span className={styles.siteValue}>{siteFormatado}</span>
                </div>
                <span className={styles.siteQtd}>{qtd}</span>
            </label>
        </li>
    )
}

function sites({mark}: {mark: string}) {

    const sites = (): Sites[] =>{
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
        return slw
    }

    const data = sites()

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