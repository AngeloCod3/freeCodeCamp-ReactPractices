import '../stylesheets/Botones.css';

function Botones(props) {
  const IsOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  }

  return (

    <div className={`boton-container ${IsOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.clickHanlder(props.children)}>

        {props.children}
    </div>

  )
}

export default Botones;