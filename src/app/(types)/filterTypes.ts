export const fieldsObj ={
    paridades: ["perfeito", "bom", "ruim", "pessimo"],
    sites: ["linkedin", "indeed", "infojobs", "catho"],
    disponibilidade: "todos",
    ordemParidade: true,
    acessState: "salvo",
    date: "todos"
} as const

export type FieldsType = typeof fieldsObj