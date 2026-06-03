import fs from "fs";
import {headers} from "next/headers"
import {VacancyAPI} from "./types"

// os tipos do card de expansao

export default async function getListage() {
  
  const headersMap = await headers()
  const pathname = headersMap.get("x-pathname")
  const searchparams = new URL(pathname!).searchParams
  const page = searchparams.get("p")
  const resp3 = 
  await fetch(`http://localhost:3000/listage?${searchparams.toString()}`)
  const dados: VacancyAPI[] = await resp3.json()

  return dados;
}