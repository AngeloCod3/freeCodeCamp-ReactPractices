
function Botones(props) {
  const IsOperator = value => {
    return 
  }

  return (

    <div className={`boton-container ${IsOperator(props.children) ? 'operator' : null}`}>

        {props.children}
    </div>

  )
}

export default Botones;