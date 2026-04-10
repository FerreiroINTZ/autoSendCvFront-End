"use client";

import styles from "../../styles/searchFormCompStyles/searchFormComp.module.scss"

type SitesAvailableDataType = {
    site: string,
    qtd: number
}

const SiteCard = ({site, qtd}: SitesAvailableDataType) =>{
        return(
            <li>
                <input 
                    type="checkbox" 
                    name="site" 
                    id={`${site}-site`}/>
                    <label htmlFor={`${site}-site`}>
                    <span>{site}</span> <span>{qtd}</span>
                </label>
            </li>
        )
    }

function sitesAvailable() {

    const sitesAvailableData: SitesAvailableDataType[] = [
    {site: "linkedin", qtd: 10},
    {site: "indeed", qtd: 10},
    {site: "infojobs", qtd: 10},
    {site: "catho", qtd: 10},
  ]

  return (
    <div id={styles.sitesAvailable}>
      <p>SITES</p>
      <ul id={styles.siteOptions}>
        {sitesAvailableData.map((x, index) => (
          <SiteCard key={index} site={x.site} qtd={x.qtd} />
        ))}
      </ul>
    </div>
  );
}

export default sitesAvailable;
