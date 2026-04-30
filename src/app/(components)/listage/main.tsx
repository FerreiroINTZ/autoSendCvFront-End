import styles from "./styles/listage.module.scss"
import getData from "../../(functions)/getList"
import CardComp from "../../(components)/listage/card"
import ActionBtn from "./fixedContent/fixedContentMain"
import getVacancies from "../../(functions)/getList"

import {Vancancy} from "../../(functions)/getList"

const RenderComp = () =>{
  return(
  <>
  
  </>
)
}

async function page() {

  const data = await getVacancies()
  // console.log(data)
  // console.log("slw")

  return (
    <>
    <div id={styles.vacanciesContainer}>
      {data.length
      ? <>Sim</>
      : <h2 id="no_data_title">Nao ha dados <br/> Disponiveis</h2>
    }
    </div>
      <ActionBtn />
      </>
  )
}

export default page