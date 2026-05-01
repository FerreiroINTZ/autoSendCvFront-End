import styles from "../../styles/filters/disponibilidade.module.scss"

import {useFormContext} from "react-hook-form"

const Card = ({label, qtd}: {label: string, qtd: number}) =>{
    
    const {register} = useFormContext()
    
    return(
            <li className={styles.card}>
                <input 
                    id={label} 
                    type="radio" 
                    // defaultChecked={label == "todos"}
                    value={label}
                    {...register("disponibilidade")}/>
                <label id={styles[label]} htmlFor={label}>
                    <div className={styles.light}></div>
                    <p>{label.toUpperCase()}</p>
                    <span>{qtd}</span>
                </label>
            </li>
    )
}

function disponibilidade({mark}: {mark: string}) {

    const data = [
        {label: "todos", qtd: 16},
        {label: "disponiveis", qtd: 10},
        {label: "indisponiveis", qtd: 6}
    ]

  return (
    <div className={mark} id={styles.disponibilidade}>
        <p id={styles.title}>DISPONIBILIDADE</p>
        <ul>
            {data.map((x, index) =>
                <Card key={index} label={x.label} qtd={x.qtd}/>
            )}
        </ul>
    </div>
  )
}

export default disponibilidade