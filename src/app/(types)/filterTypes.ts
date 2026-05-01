export const fieldsObj ={
    paridades: ["perfeito", "bom", "ruim", "pessimo"],
    sites: ["linkedin", "indeed", "infojobs", "catho"],
    disponibilidade: "todos"
} as const

export type FieldsType = typeof fieldsObj