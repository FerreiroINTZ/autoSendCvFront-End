import fs from "fs";
import {headers} from "next/headers"

// os tipos do card de expansao
export type OtherInfos = {
  id?: number,
  summary?: string, 
  keywords?: string[],
  matches?: string[]
  searchwords?: string[],
  weknesses?: string[]
}

// os tipos do card sem expansao
export type GeneralInfos = {
  titulo: string,
    area: string,
    regiao: string,
    salario: number,
    site: string,
    dt_publicacao: string,
    paridade: number,
    link: string,
    empresa: string,
    state: number,
  }
  
// apenas para os dados pegos da API
export type VacancyAPI = GeneralInfos & { expanded: OtherInfos }

// os dados usados nos componentes
export type Vancancy = OtherInfos & {
    titulo: string,
    area: string,
    regiao: string,
    salario: number,
    site: string,
    dt_publicacao: string,
    paridade: number,
    link: string,
    empresa: string,
    state: number,
    acesso: string,
    last_disp_analysis: Date,
    disponibilidade: boolean
}

export default async function getListage() {
  // const resp = async () =>
  //   new Promise((resolve) => {
  //     const data = fs.readFileSync("./src/app/(functions)/slw.json");
  //     // console.log(JSON.parse(data.toString()));
  //     // console.log(data)
  //     resolve("nk");
  //   });

  // const resp2 = async (): Promise<Vancancy[]> =>
  //   new Promise((resolve) => {
  //     const dados: Vancancy[] = [];
  //     for (let i = 0; i < 10; i++) {
  //       const randNum = Math.abs(Math.ceil(Math.random() * 4) - (4 + 1))
  //       const randState = Math.abs(Math.ceil(Math.random() * 3) - (3 + 1))
  //       const obj: Vancancy = {
  //         id: 20,
  //         titulo: `vaga ${i}`,
  //         area: "slw",
  //         regiao: "campinas",
  //         salario: Math.ceil(Math.random() * 1000),
  //         site: "linkedin",
  //         dt_publicacao: (() => {
  //           const date = new Date()
  //           const day = date.getDay()
  //           const month = date.getMonth()
  //           const year = date.getFullYear()
  //           return `${day}/${month}/${year}`
  //           })(),
  //         paridade: randNum,
  //         link: "https://uol.com",
  //         empresa: "microsoft",
  //         state: randState,
  //         acesso: "",

  //         summary: "Boa vaga geral, mas não específica para sua stack. Alem do mais, acho melhor procurar em outro lugar, ja quee a vaga nao condiz com sua stack, parca",
  //         searchwords: ["Node", "Nest", "SASS", "React", "Next"],
  //         matches: ["Node", "Nest", "Typescript", "React", "GSAP", "JavaScript", "nk"],
  //         keywords: ["Node", "Nest", "SASS", "React", "Next"],
  //         weknesses: [
  //           "Nao Menciona React",
  //           "Slw, outro bagulho loko",
  //           "Precisa de 3 anos de experiencia",
  //           "Necessita de Ingles avancado",
  //           "Focada em Banco de Dados",
  //           "Fora de alcance"
  //         ]
  //       };

  //       dados.push(obj);
  //     }
  //     resolve(dados);
  //   });
  
  const headersMap = await headers()
  const pathname = headersMap.get("x-pathname")
  console.log(pathname)
  const searchparams = new URL(pathname!).searchParams
  console.log(searchparams.toString())
  const resp3 = 
  await fetch(`http://localhost:3000/listage?${searchparams.toString()}`)
  const dados: VacancyAPI[] = await resp3.json()

  // const data = await resp2();
  // console.log(dados)

  return dados;
}