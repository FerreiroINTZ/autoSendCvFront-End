import styles from "./main.module.scss"
import Header from "./components/header"
import TitleComp from "./components/title"
import FiltersComp from "./components/filter/filter"

async function main({children}: {children: React.ReactNode}) {
  
  return (
    <main id={styles.main}>
        <TitleComp />
        <Header />
        <FiltersComp />
        {children}
    </main>
  )
}

export default main