"use client"

import {VacancyAPI} from "../../(functions)/types"
import CardComp from "./card"

import {useState, useEffect} from "react"

export default function RenderComp({ data }: { data: VacancyAPI[] }) {
  
    const [datas, setDatas] = useState<VacancyAPI[]>(data)

    useEffect(() =>{
        console.log('datas')
        console.log(datas)
    }, [datas])

  return (
    <>
      {datas?.map((x: any) => {
        return (
          <CardComp
            key={x.id}
            id={x.id}
            titulo={x.titulo}
            area={x.area}
            regiao={x.regiao}
            salario={x.salario}
            site={x.plataforma}
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
            last_disp_analysis={x.last_disp_analys}
            setData={setDatas}
            // acesso={x.}
          />
        );
      })}
    </>
  );
}