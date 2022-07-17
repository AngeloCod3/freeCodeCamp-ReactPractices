import React from 'react'
import '../styles/Boton.css'

function Boton({ texto, IsClickButton, clickHandler }) {
  return (
    <button className={ IsClickButton ? 'Click' : 'Reset'} onClick= {clickHandler}>
      {texto}
    </button>
  )
}

export default Boton;