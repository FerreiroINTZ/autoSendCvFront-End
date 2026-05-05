export default async function getVacancyInfo(id: number){
    try{
        const url = `http://localhost:3000/listage/getVancanyCardInfo?id=${id}`

        // se retorar uma string vai dar erro
        // dando erro ele retorna false
        const resp = await fetch(url)
        const data = await resp.json()
        return data 
    }catch(e){
        return false
    }
}