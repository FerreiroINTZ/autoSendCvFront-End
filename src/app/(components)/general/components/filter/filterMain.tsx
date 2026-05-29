"use client";

import styles from "../../styles/filters/_filters.module.scss";
// import {headers} from "next/headers"
import ParidadeComp from "./pariade";
import SitesComp from "./sites";
import EstadoComp from "./estado"
import OrdemParidadeComp from "./ordemParidade"
import DisponibilidadComp from "./disponibilidade"
import DateComp from "./date"

import FinalComp from "./final";

import {FieldsType, fieldsObj, useGetUrlParams, FieldsTypes} from "@Types/filterTypes"

import { useForm, FormProvider } from "react-hook-form";
import {useState} from "react"
import {useRouter} from "next/navigation"

function filter() {

  const router = useRouter()

  const [filterBests, setFilterBests] = useState(false)

  const metodos = useForm<FieldsTypes>({
    defaultValues: useGetUrlParams(),
  });

  // const head = await headers()
  // console.log("headers")
  // console.log(head.get("x-pathname"))

  function send(data: any){
    console.log("nada")
    // console.log(data)
    const url = new URL(window.location.href)
    for(let value of Object.keys(data)){
      url.searchParams.set(value, data[value])
    }

    console.log(url.searchParams.toString())
    router.push(`/?${url.searchParams.toString()}`)
  }

  return (
    <FormProvider {...metodos}>
      <aside id={styles.filters}>
        <form onSubmit={metodos.handleSubmit(send)} id="formulario">
          <ParidadeComp mark={styles.mark} />
          <SitesComp mark={styles.mark} />
          <EstadoComp mark={styles.mark}/>
          <OrdemParidadeComp mark={styles.mark}/>
          <DisponibilidadComp mark={styles.mark} />
          <DateComp mark={styles.mark}/>
          <FinalComp mark={styles.mark} />
        </form>
      </aside>
    </FormProvider>
  );
}

export default filter;
