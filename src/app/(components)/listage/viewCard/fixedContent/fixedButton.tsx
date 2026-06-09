import styles from "../../styles/viewCardSrtyles/fixedButton/main.module.scss"

import {useState} from "react"
import {useRouter} from "next/navigation"
import Image from "next/image"

import actionsIcon from "@icons/actionsContainer/actionsIcon.png"
import eraseIcon from "@icons/actionsContainer/eraseIcon.png"
import accessIcon from "@icons/actionsContainer/accessIcon.png"
import editIcon from "@icons/actionsContainer/editIcon.png"

function fixed({jobId}: {jobId: string}) {

  const router = useRouter()

    const [
        expandFixedButtonContent, 
        setExpandFixedButtonContent
    ] = useState(false)

    async function deleteVacancy(){
      const resp = await fetch(`http://localhost:3000/change/delete/${jobId}`)

      if(resp.ok){
        window.location.href = "/"
      }
    }

  return (
    <div 
      id={styles.actionContainerBg}
      data-showing={expandFixedButtonContent}>

    <div 
      id={styles.fixedButtonContainer} 
      onMouseEnter={() => setExpandFixedButtonContent(true)}
      onMouseLeave={() => setExpandFixedButtonContent(false)}>
      <div id={styles.contentWrapper}>
        <div id={styles.acces_actionsBtnContainer}>
          {expandFixedButtonContent &&
            <button
            id={styles.accessBtn}
            className={styles.actionsBtns}
            >
              <Image src={accessIcon} alt="" />
              <p>CESSAR</p>
            </button>
          }
          <button id={styles.actionsButton}>
            <Image src={actionsIcon} alt="icone de acoes" />
          </button>
        </div>
        {expandFixedButtonContent &&
        <>
          <button
            className={styles.actionsBtns} 
            id={styles.eraseBtn}
            onClick={() => deleteVacancy()}>
              <Image src={eraseIcon} alt="" />
              <p>DELETAR</p>
            </button>
          <button
            id={styles.editBtn}
            className={styles.actionsBtns}
          >
            <Image src={editIcon} alt="" />
            <p>EDITAR</p>
          </button>
        </>
      }
      </div>
    </div>
    </div>
  )
}

export default fixed