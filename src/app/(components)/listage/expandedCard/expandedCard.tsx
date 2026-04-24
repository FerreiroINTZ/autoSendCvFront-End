import styles from "../styles/_card.module.scss" 

import {OtherInfos} from "../../../(functions)/getList"

const ListBlock = ({vall, field}: {vall: string[] | string, field: string}) =>{
    console.log(field)
    console.log(typeof vall)
    return(
        <>
            <div className={styles[field]}>
                <p className={styles.label}>{field.toUpperCase()}</p>
                <ul className={styles.value}>
                    {typeof vall == "string"
                        ? (<li>Nao ha {field}!</li>)
                        : vall.length
                            ? (vall?.map((x, index) =>
                                    <li key={index}>{x}</li>
                                ))
                            : (<li>Nao ha {field}!</li>)
                    }
                    {}
                </ul>
            </div>
        </>
    )
}

function expandedCard({
    summary,
    matches,
    searchwords,
    keywords,
    weknesses
}: OtherInfos) {
  return (
    <div className={styles.expendendInfos}>
        <div className={styles["sumary_match-container"]}>
            <div className={styles.sumary}>
                <p className={styles.label}>SUMARY</p>
                <p className={styles.value}>{summary || "nao ha summary!"}</p>
            </div>
            <ListBlock vall={matches! || ""} field="match"/>
        </div>

        <div className={styles["weknesses-container"]}>
            <ListBlock vall={weknesses! || ""} field="weknesses"/>
        </div>
          
        <div className={styles["search_keywords-container"]}>
            <ListBlock vall={searchwords! || ""} field="search"/>
            <ListBlock vall={keywords! || ""} field="keywords"/>
        </div>
      </div>
  )
}

export default expandedCard