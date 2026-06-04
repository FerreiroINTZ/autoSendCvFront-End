"use client"

import {useSearchParams} from "next/navigation"
import {z} from "zod"

export const fieldsObj = {
    paridades: ["perfeito", "bom", "ruim", "pessimo"],
    sites: ["linkedin", "indeed", "infojobs", "catho"],
    disponibilidade: "todos",
    ordemParidade: true,
    acesso: ["salvo", "acessado", "aplicado"],
    date: "todos"
} as const

export type FieldsType = typeof fieldsObj

const filterParamsSchema = z.object({
    paridades: z.string()
    .transform((vall: string) => vall.split(","))
    .default([...fieldsObj.paridades]),
    
    sites: z.string()
    .transform((vall: any) => vall.split(","))
    .default([...fieldsObj.sites]),
    
    disponibilidade: z.string().default("todos"),
    
    ordemParidade: z.string().default("true")
    .transform((vall: string) => Boolean(vall)),
    
    acesso: z.string()
    .transform((vall: any) => vall.split(","))
    .default([...fieldsObj.acesso]),
    
    date: z.string().default("todos")
}).strip()

export type FieldsTypes = z.infer<typeof filterParamsSchema>

export function useGetUrlParams(){
    const searchParams = useSearchParams()

    const params = Object.fromEntries(searchParams)
    // console.log("filtros", params)
    const parsedParams = filterParamsSchema.parse(params)

    return parsedParams
}