"use client"

import Link from "next/link"

function viewMoreComp({id}: {id: number}) {

  return (
    <>
        <Link href={`/?id=${id}`}>VER MAIS</Link>
    </>
  )
}

export default viewMoreComp