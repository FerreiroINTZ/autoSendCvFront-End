'use client'

import styles from "../styles/searchFormCompStyles/searchFormComp.module.scss"

import {Dispatch, SetStateAction} from "react"
import {useForm, FormProvider} from "react-hook-form"

import CardHeaderComp from "./searchFormComps/cardHeader"
import SitesAvailableComp from "./searchFormComps/sitesAvailable"
import Qtd_Ai_Comp from "./searchFormComps/qtd_aiComp"
import ListsComp from './searchFormComps/listsComp'

export type FormFields = {
    prompt: string,
    sites: string[],
    keywords: string[],
    searchWords: string[]
    qtdPages: number,
    qtdVanancies: number,
    aiToken: string
}

function searchFormComp(
    {changeCard}: {changeCard: Dispatch<SetStateAction<string>>}
) {
  
    const metodos = useForm<FormFields>()

    metodos.register("sites", {
        required: true,
        value: []
    })
    metodos.register("keywords", {
        required: true,
        value: []
    })
    metodos.register("searchWords", {
        required: true,
        value: []
    })

    function sendForm(data: any){
        console.log("Enviando!")
        console.log(data)
    }

    function errorForm(err: any){
        console.log("Erro!")
        console.log(err)
    }

  const defaultPrompt = "Lorem ipsum dolor sit amet consectetur. Sed sollicitudin tempor lectus ipsum euismod dolor. Aliquam accumsan lacus a commodo bibendum amet. Aliquet mauris condimentum ac sed. Ultricies dolor in eget viverra aenean at. Venenatis vulputate lobortis amet risus. Mollis amet porttitor sit sagittis justo."

    return (
    <div id={styles.searchFormComp} onClick={() => changeCard("")}>
        <FormProvider {...metodos}>
        <form 
            onClick={e => e.stopPropagation()}
            onSubmit={metodos.handleSubmit(sendForm, errorForm)}>

            <CardHeaderComp changeCard={changeCard}/>

            <div id={styles.fieldsContainer}>
                
                <div id={styles.prompt_lists}>
                    <div id={styles.promptContainer}>
                        <p>PROMPT</p>
                        <textarea
                            {...metodos.register("prompt", {
                                required: true,
                                value: defaultPrompt
                            })}>
                        </textarea>
                    </div>
                    
                    <div id={styles.listsComp}>
                        <ListsComp 
                            fieldLabel="search words" 
                            field="searchWords" />
                        <ListsComp 
                            fieldLabel={"keywords"} 
                            field="keywords" />
                    </div>
                </div>
                
                <div id={styles.selects}>
                
                    <SitesAvailableComp />

                    <div id={styles.ai_qtd_sendBtn}>
                            <Qtd_Ai_Comp />
                            <button
                                data-active={`${metodos.formState.isValid}`}
                                type={
                                    metodos.formState.isValid 
                                        ? "submit" 
                                        : "button"
                                    } 
                                id={styles.startSearch}>INICIAR BUSCA</button>
                    </div>
                </div>

            </div>
        </form>
        </FormProvider>
    </div>
  )
}

export default searchFormComp