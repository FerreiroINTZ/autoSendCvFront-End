import fs from "fs";

export type Vancancy = {
    title: string,
    area: string,
    regiao: string,
    salario: number,
    site: string,
    dt_publicacao: string,
    paridade: number,
    link: string,
    empresa: string,
    state: number
}

export default async function getListage() {
  const resp = async () =>
    new Promise((resolve) => {
      const data = fs.readFileSync("./src/app/(functions)/slw.json");
      // console.log(JSON.parse(data.toString()));
      // console.log(data)
      resolve("nk");
    });

  const resp2 = async (): Promise<Vancancy[]> =>
    new Promise((resolve) => {
      const dados: Vancancy[] = [];
      for (let i = 0; i < 10; i++) {
        const randNum = Math.abs(Math.ceil(Math.random() * 4) - (4 + 1))
        const randState = Math.abs(Math.ceil(Math.random() * 3) - (3 + 1))
        const obj: Vancancy = {
          title: `vaga ${i}`,
          area: "slw",
          regiao: "campinas",
          salario: Math.ceil(Math.random() * 1000),
          site: "linkedin",
          dt_publicacao: (() => {
            const date = new Date()
            const day = date.getDay()
            const month = date.getMonth()
            const year = date.getFullYear()
            return `${day}/${month}/${year}`
            })(),
          paridade: randNum,
          link: "https://uol.com",
          empresa: "microsoft",
          state: randState
        };

        dados.push(obj);
      }
      resolve(dados);
    });

  const data = await resp2();

  return data;
}