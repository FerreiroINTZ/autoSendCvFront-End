import styles from "../../styles/filters/_filters.module.scss"
import {headers} from "next/headers"
import ParidadeComp from "./pariade"

async function filter() {

  const head = await headers()
  console.log("headers")
  console.log(head.get("x-pathname"))

  return (
    <aside id={styles.filters}>
      <ParidadeComp />
    </aside>
  )
}

export default filter