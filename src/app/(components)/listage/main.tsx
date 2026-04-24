import styles from "./styles/listage.module.scss"
import getData from "../../(functions)/getList"
import CardComp from "../../(components)/listage/card"
import ActionBtn from "./fixedContent/fixedContentMain"
import getVacancies from "../../(functions)/getList"

async function page() {

  const data = await getVacancies()
  console.log(data)
  console.log("slw")

  return (
    <>
    <div id={styles.vacanciesContainer}>
      {data.map((x, index) =>{
        // console.log("================")
        // console.log(x.title)
        return(
        <CardComp 
          key={index}
          titulo={x.titulo}
          area={x.area}
          regiao={x.regiao}
          salario={x.salario}
          site={x.site}
          dt_publicacao={x.dt_publicacao}
          paridade={x.paridade}
          link={x.link}
          empresa={x.empresa}
          state={x.state}
          summary={x?.expanded?.summary}
          matches={x?.expanded?.matches}
          keywords={x?.expanded?.keywords}
          searchwords={x?.expanded?.searchwords}
          weknesses={x?.expanded?.weknesses}
          />)
        }
      )}
    </div>
      <ActionBtn />
      </>
  )
}

export default page