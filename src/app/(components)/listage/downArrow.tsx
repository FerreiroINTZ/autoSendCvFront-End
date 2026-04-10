"use client"

import Image from "next/image"
import downArrowIcon from "@icons/arrow.png" 

function downArrow({styles}: {styles: any}) {

    function scroll(element: HTMLDivElement){
        // const slw = element.getBoundingClientRect()
        // console.log(slw)
    }

  return (
    <div onClick={e => scroll(e.target as HTMLDivElement)} className={styles.expadIcon}>
        <Image src={downArrowIcon} alt="arrow" />
    </div>
  )
}

export default downArrow