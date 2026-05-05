import styles from "./styles/listage.module.scss"
import getData from "../../(functions)/getList"
import CardComp from "../../(components)/listage/card"
import ActionBtn from "./fixedContent/fixedContentMain"
import getVacancies from "../../(functions)/getList"
import ViewCardComp from './viewCard/viewCardComp'

import {VacancyAPI} from "../../(functions)/getList"
import getViewCardInfos from "@serverFunctions/getViewCardInfos"

import {headers} from "next/headers"
import {redirect} from "next/navigation"

function RenderComp({data}: {data: VacancyAPI[]}){
return(<>
  {data?.map((x: any, index) =>{
    // console.log("================")
        // console.log(x)
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
          weknesses={x?.expanded.weaknesses}
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

  const heads = await headers()
  const href = new URL(heads.get("x-pathname") as string)
  const params = href.searchParams
  const id = params.get("id")

  let vacancyData = {}
  if(id){
    console.log(`\x1b[32m${id}\x1b[0m`)
    vacancyData = await getViewCardInfos(Number(id))
    
    // se der erro vai retorar false 
    // //pois o id provavelmente sera icorreto ou iexistente
    if(!vacancyData){
      redirect("/")
    }
  }

  // console.log(data[0])

  return (
    <>
    <div id={styles.vacanciesContainer}>
      {data.length
      ? <RenderComp data={data}/>
      : <h2 id="no_data_title">Nao ha dados <br/> Disponiveis</h2>
    }
    </div>
    
      {/*O Componente dop Cad de busca e rendeizado aqui  */}
      
      {id 
      ? <ViewCardComp data={vacancyData} />
      : <ActionBtn />}
      </>
  )
}

export default page