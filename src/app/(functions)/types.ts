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
    last_disp_analysis: String,
    disponibilidade: boolean
}