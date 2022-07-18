import React from 'react';
import '../stylesheets/ClearButton.css';

function ClearButton(props) {

  return (
    <button className='clearButton' onClick={props.
    clickHanlder} >
        {props.children}
    </button>
  )
}

export default ClearButton;