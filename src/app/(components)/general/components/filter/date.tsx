import styles from "@generalStyles/filters/date.module.scss"

import {useFormContext} from "react-hook-form"
import {ChangeEvent} from "react"

// se resetar os valores vao continuar como estao, nos inputs, mas no estte seram diferentes
function date({mark}: {mark: string}) {

    const {register, setValue} = useFormContext()

    function setDate(
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ){
        const value = event.target.value
        setValue("date", value)
    }

  return (
    <div className={mark} id={styles.dateContainer}>
        <p id={styles.title}>DATA</p>
        <div>
            <div id={styles.intervalField}>
                <select onChange={setDate}>
                    <option value="todos">TODOS</option>
                    <option value="1 day">ontem</option>
                    <option value="1 week">1 semana</option>
                    <option value="2 week">2 semana</option>
                    <option value="3 week">3 semana</option>
                    <option value="1 month">1 mes</option>
                    <option value="2 months">2 meses</option>
                    <option value="3 months">3 meses</option>
                </select>
            </div>
            <label id={styles.specificDate} htmlFor="expecificDate">
                <p>EXPECIFICO:</p>
                <input id="expecificDate" type="date" onChange={setDate}/> 
            </label>
        </div>
    </div>
  )
}

export default date