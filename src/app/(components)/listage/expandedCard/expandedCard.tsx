import styles from "../styles/_card.module.scss" 

import {OtherInfos} from "../../../(functions)/getList"

const ListBlock = ({vall, field}: {vall: string[], field: string}) =>{
    return(
        <>
            <div className={styles[field]}>
                <p className={styles.label}>{field.toUpperCase()}</p>
                <ul className={styles.value}>
                    {vall.map((x, index) =>
                        <li key={index}>{x}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

function expandedCard({
    sumary,
    match,
    search,
    keywords,
    weknesses
}: OtherInfos) {
  return (
    <div className={styles.expendendInfos}>
        <div className={styles["sumary_match-container"]}>
            <div className={styles.sumary}>
                <p className={styles.label}>SUMARY</p>
                <p className={styles.value}>{sumary}</p>
            </div>
            <ListBlock vall={match} field="match"/>
        </div>

        <div className={styles["weknesses-container"]}>
            <ListBlock vall={weknesses} field="weknesses"/>
        </div>
          
        <div className={styles["search_keywords-container"]}>
            <ListBlock vall={search} field="search"/>
            <ListBlock vall={keywords} field="keywords"/>
        </div>
      </div>
  )
}

export default expandedCard