"use client";

import styles from "../../styles/filters/_filters.module.scss";
// import {headers} from "next/headers"
import ParidadeComp from "./pariade";
import SitesComp from "./sites";
import EstadoComp from "./estado"
import OrdemParidadeComp from "./ordemParidade"
import DisponibilidadComp from "./disponibilidade"

import FinalComp from "./final";

import {FieldsType, fieldsObj} from "@Types/filterTypes"

import { useForm, FormProvider } from "react-hook-form";
import {useState} from "react"

function filter() {

  const [filterBests, setFilterBests] = useState(false)

  const metodos = useForm<FieldsType>({
    defaultValues: fieldsObj,
  });

  // const head = await headers()
  // console.log("headers")
  // console.log(head.get("x-pathname"))

  function send(data: any){
    console.log("nada")
    console.log(data)
  }

  return (
    <FormProvider {...metodos}>
      <aside id={styles.filters}>
        <form onSubmit={metodos.handleSubmit(send)}>
          <ParidadeComp mark={styles.mark} />
          <SitesComp mark={styles.mark} />
          <EstadoComp mark={styles.mark}/>
          <OrdemParidadeComp mark={styles.mark}/>
          <DisponibilidadComp mark={styles.mark} />
          <FinalComp mark={styles.mark} />
        </form>
      </aside>
    </FormProvider>
  );
}

export default filter;
