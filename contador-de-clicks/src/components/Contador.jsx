import React from 'react';
import '../styles/Contador.css';

function Contador({ number }) {
  return (
    <div className='contador'>{number}</div>
  )
}

export default Contador;