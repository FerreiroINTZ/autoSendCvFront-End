"use client"

import styles from "./styles/actionsBtn.module.scss"
import ActionsBtn from "./actionsBtn"

import {useState} from "react"

import SearchFormComp from "./searchFormComp"

function actionsBtn() {
    
  const [currComp, setCurrComp] = useState("")

    const Cards = [
      {comp: "", element: <></>},
      {comp: "searchForm", element: <SearchFormComp changeCard={setCurrComp}/>},
      {comp: "review", element: <><h1>Felipe</h1></>},
      {comp: "searchCard", element: <><h1>Ferreira</h1></>},
    ]
    
    const CurrComp = () =>{
      for(let element of Cards){
        if(element.comp == currComp){
          return element.element
        }
      }
    }
  
    return (
    <>
        <ActionsBtn changeCard={setCurrComp}/>
        <CurrComp />
    </>
  )
}

export default actionsBtn