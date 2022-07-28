import React, { Component } from 'react'

class Tarea extends Component {
  constructor(props){
    super(props);
    this.state={complete:true}
  }
  render() {
    return (
      <div>
        Hola soy un componente de {this.props.name}
        <button className='btn'>Agregar</button>
      </div>
    )
  }
}

export default Tarea;