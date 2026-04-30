import styles from "./styles/listage.module.scss"
import getData from "../../(functions)/getList"
import CardComp from "../../(components)/listage/card"
import ActionBtn from "./fixedContent/fixedContentMain"
import getVacancies from "../../(functions)/getList"

import {VacancyAPI} from "../../(functions)/getList"

function RenderComp({data}: {data: VacancyAPI[]}){
return(<>
  {data?.map((x: any, index) =>{
    // console.log("================")
        // console.log(x.title)
        return(
        <CardComp 
          key={x.id}
          id={x.id}
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
          acesso={x.acesso}
          disponibilidade={x.disponibilidade}
          last_disp_analysis={x.last_disp_analysis}
          // acesso={x.}
          />)
        }
  )}
        </>
)}

async function page() {

  const data = await getVacancies()
  // console.log(data)
  // console.log("slw")

  return (
    <>
    <div id={styles.vacanciesContainer}>
      {data.length
      ? <RenderComp data={data}/>
      : <h2 id="no_data_title">Nao ha dados <br/> Disponiveis</h2>
    }
    </div>
      <ActionBtn />
      </>
  )
}

export default page