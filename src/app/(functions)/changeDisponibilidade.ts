"use server"

export default async function changeDispoibilidade(jobId: string){
    try{
        const resp = await fetch(`http://localhost:3000/change/disponibilidade/${jobId}`)
        
        if(!resp.ok){
            throw new Error(`
                Erro ao mudar a dispoibilidade!
                Vaga: ${jobId} | Status code: ${resp.status}
                `)
        }
        return true
    }catch(e){
        console.log(e)
        console.log("Erro ao mudar a disppoibilidade da vaga", jobId)
        return false
    }
}