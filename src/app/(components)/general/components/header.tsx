import styles from "../styles/_header.module.scss"

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

type Data = {
  index: string,
  value: number
}

async function header() {

  const datas: Data[] = [
    {
      index: "pessimos",
      value: 3
    },
    {
      index: "ruins",
      value: 11
    },
    {
      index: "bons",
      value: 4
    },
    {
      index: "perfeitos",
      value: 14
    },
    {
      index: "total",
      value: 60
    }
  ]

  return (
    <header id={styles.header}>
      <ul>
        {datas.map((x, index) => 
        <Item 
          key={index}
          indice={x.index} 
          value={x.value}
        />)}
      </ul>
    </header>
  )
}

export default header