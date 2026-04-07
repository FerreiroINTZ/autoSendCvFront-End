import styles from "../../styles/filters/_filters.module.scss"
import {headers} from "next/headers"
import ParidadeComp from "./pariade"
import SitesComp from "./sites"
import FinalComp from "./final"

async function filter() {

  const head = await headers()
  console.log("headers")
  console.log(head.get("x-pathname"))

  return (
    <aside id={styles.filters}>
      <ParidadeComp mark={styles.mark}/>
      <SitesComp mark={styles.mark}/>
      <FinalComp mark={styles.mark}/>
    </aside>
  )
}

export default filter