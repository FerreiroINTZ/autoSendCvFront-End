import styles from "../styles/header/_header.module.scss"
import getInfos, {Data} from "@serverFunctions/getInfos"

const Item = ({indice, value}: {indice: string, value: number}) =>{
  return(<>
    <li className={
      indice != "total" 
        ? styles.indexCardOthers 
        : styles.indexCardTotal}
        data-cor={indice}>
      <p>{value}</p>
      <span>{indice.toUpperCase()}</span>
    </li>
  </>)
}

async function header(){

  const dados = await getInfos() as Data[]
  console.log(dados)

  return (
    <header id={styles.header}>
      <ul>
        {dados.map((x, index) => 
        <Item 
          key={index}
          indice={x.index} 
          value={x.vall}
        />)}
      </ul>
    </header>
  )
}

export default header