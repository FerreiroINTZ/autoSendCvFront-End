export type Data = {
    index: string,
    vall: number
}

export default async function getInfos(){
  // const datas: Data[] = [
  //   {
  //     index: "pessimos",
  //     vall: 3
  //   },
  //   {
  //     index: "ruins",
  //     vall: 11
  //   },
  //   {
  //     index: "bons",
  //     vall: 4
  //   },
  //   {
  //     index: "perfeitos",
  //     vall: 14
  //   },
  //   {
  //     index: "total",
  //     vall: 60
  //   }
  // ]
    const resp = await fetch("http://localhost:3000/infos")
    const data = await resp.json()
    return data
}