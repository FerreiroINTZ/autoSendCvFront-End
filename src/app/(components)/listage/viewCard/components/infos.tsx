import styles from "../../styles/viewCardSrtyles/viewCardStyles.module.scss"

const Card = ({value}: {value: string}) =>{
  return(
    <>
      <li>
        {value}
      </li>
    </>
  )
}

function infos(
    {matches, summary, weaknesses}: 
    {matches: string[], summary: string[], weaknesses: string[]}) {
  return (
    <div id={styles.infosContainer}>
        <div id={styles.summaryContainer}>
            <h3>SUMMARY</h3>
            <p>{summary}</p>
        </div>

        <div id={styles.matchesContainer}>
            <h3>MATCHES</h3>
            <ul>
              {matches.map((x, index) =>
                <Card key={index} value={x}/>
              )}
            </ul>
        </div>

        <div id={styles.weaknessesContainer}>
            <h3>WEAKNESSES</h3>
            <ul>
              {weaknesses.map((x, index) =>
                <Card key={index} value={x}/>
              )}
            </ul>
        </div>
    </div>
  )
}

export default infos