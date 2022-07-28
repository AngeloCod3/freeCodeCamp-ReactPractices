import React from 'react';
import '../styles/Contador.css';
import { Component } from 'react';


class Contador extends Component {
  render() {
    return (
      <div className='contador'>{this.props.number}</div>
    )
  }
}

export default Contador;