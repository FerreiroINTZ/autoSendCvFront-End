import styles from "./styles/listage.module.scss";
import ActionBtn from "./fixedContent/fixedContentMain";
import getVacancies from "../../(functions)/getList";
import ViewCardComp from "./viewCard/viewCardComp";

import { VacancyAPI } from "../../(functions)/types";
import getViewCardInfos from "@serverFunctions/getViewCardInfos";

import { headers } from "next/headers";

import RenderComp from "./renderVacancyesComp"

async function main() {
  // da listame dos registros
  const data: any = await getVacancies();
  
  const heads = await headers();
  const href = new URL(heads.get("x-pathname") as string);
  const params = href.searchParams;
  const id = params.get("id");
  
  // card de uma vaga
  let vacancyData = {};
  if(id){
    console.log(`\x1b[32m${id}\x1b[0m`);
    vacancyData = await getViewCardInfos(id ? Number(id) : 0);
    
    console.log("vacancyData")
    console.log(vacancyData)
    
    // se der erro vai retorar false
    // pois o id provavelmente sera icorreto ou iexistente
    if (!vacancyData || !data) {
      console.log("\x1b[m erro! \x1b[m")
      // redirect("/");
      return;
    }
  }
      return (
        <>
          <div id={styles.vacanciesContainer}>
            {data.length ? (
              <>
              <RenderComp data={data} />
              </>
            ) : (
              <h2 id="no_data_title">
                Nao ha dados <br /> Disponiveis
              </h2>
            )}
          </div>

          {/*O Componente dop Cad de busca e rendeizado aqui  */}

          {id ? <ViewCardComp data={vacancyData} /> : <ActionBtn />}
        </>
      );
    }

export default main;
