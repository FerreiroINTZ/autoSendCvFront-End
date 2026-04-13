"use client";

import styles from "../../styles/searchFormCompStyles/searchFormComp.module.scss"

import React from "react"
import {useFormContext} from "react-hook-form"

type SitesAvailableDataType = {
    site: string,
    qtd: number
}

const SiteCard = ({site, qtd}: SitesAvailableDataType) =>{

  const {setValue, getValues} = useFormContext()

  function setFormValue(value: boolean){
    let sites: string[] = getValues("sites")
    console.log(sites)
    if(value){
      sites.push(site)
    }else{
      sites = sites.filter(x => x != site)
    }
    setValue("sites", sites, { shouldValidate: true })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      const element = e.currentTarget
      const isChecked = element.checked
      setFormValue(isChecked)
  }

        return(
            <li>
                <input 
                    type="checkbox" 
                    name="site" 
                    id={`${site}-site`}
                    onChange={handleChange}/>
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
