import '../styles/Boton.css';
import React, { Component } from 'react';

 class Boton extends Component {
  render() {
    return (
      <button className={ this.props.IsClickButton ? 'Click' : 'Reset'} onClick= {this.props.clickHandler}>
//       {this.props.texto}
//     </button>
    )
  }
}


// function Boton({ texto, IsClickButton, clickHandler }) {
//   return (
//     
//   )
// }

export default Boton;