import React from 'react'

function not_found() {
  return (
    <div id="notFoundContainer">
        <h1>rota errada!</h1>
        <p>Volte para alguma dessas paginas: </p>
        <br />
        <a href='/'>Listagem</a>
        <br />
        <br />
        <a href="/dashboard">Dashboard</a>
    </div>
  )
}

export default not_found