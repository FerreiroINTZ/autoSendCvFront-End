"use server"

import fs from "fs";
import {headers} from "next/headers"
import {VacancyAPI} from "./types"

// os tipos do card de expansao

export default async function getListage() {
  
  const headersMap = await headers()
  const pathname = headersMap.get("x-pathname")
  const searchparams = new URL(pathname!).searchParams
  const page = searchparams.get("p")
  try{

    const resp3 = 
    await fetch(`http://localhost:3000/listage?${searchparams.toString()}`)
    if(resp3.status != 200){
      throw new Error("Erro ao pegar os dados da vaga")
    }
    const dados: VacancyAPI[] = await resp3.json()
    return dados;
  }catch(e){
    console.log(e)
    return {state: false}
  }

}