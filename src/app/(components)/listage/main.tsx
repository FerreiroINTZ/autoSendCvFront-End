import styles from "./styles/listage.module.scss"
import getData from "../../(functions)/getList"
import CardComp from "../../(components)/listage/card"
import ActionBtn from "./fixedContent/fixedContentMain"

async function page() {

  const data = await getData()
  console.log("slw")

  return (
    <>
    <div id={styles.vacanciesContainer}>
      {data.map((x, index) =>{
        console.log("================")
        console.log(x.title)
        return(
        <CardComp 
          key={index}
          title={x.title}
          area={x.area}
          regiao={x.regiao}
          salario={x.salario}
          site={x.site}
          dt_publicacao={x.dt_publicacao}
          paridade={x.paridade}
          link={x.link}
          empresa={x.empresa}
          state={x.state}
          sumary={x.sumary}
          match={x.match}
          keywords={x.keywords}
          search={x.search}
          weknesses={x.weknesses}
          />)
        }
      )}
    </div>
      <ActionBtn />
      </>
  )
}

export default page