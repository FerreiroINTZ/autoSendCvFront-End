"use client"

import slw from "./(functions)/teste"

function testeComp() {

  async function rpz(){
     const data = await slw()
     console.log(data)
  }

  return (
    <div>
        <h2>Testte Comp</h2>
        <button onClick={rpz}>Acionar</button>
    </div>
  )
}

export default testeComp