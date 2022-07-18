import './stylesheets/App.css';
import Botones from './components/Botones';
import Pantalla from './components/Pantalla';
import ClearButton from './components/ClearButton';
import LogofreeCode from './components/LogofreeCode';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const clear = () => {
    setInput('')
  }

  const calcular = () => {
    if (input) {
      setInput(evaluate(input));
    } else { 
    setInput('');
    }
  }

  return (
    <div className="App">
      <LogofreeCode/>

      <div className="calculadora-container">
        <div className="row">
          <Pantalla input={input}/>
        </div>
        <div className="row">
          <Botones clickHanlder={addInput}>1</Botones>
          <Botones clickHanlder={addInput}>2</Botones>
          <Botones clickHanlder={addInput}>3</Botones>
          <Botones clickHanlder={addInput}>+</Botones>
        </div>
        <div className="row">
          <Botones clickHanlder={addInput}>4</Botones>
          <Botones clickHanlder={addInput}>5</Botones>
          <Botones clickHanlder={addInput}>6</Botones>
          <Botones clickHanlder={addInput}>-</Botones>
        </div>
        
        <div className="row">
          <Botones clickHanlder={addInput}>7</Botones>
          <Botones clickHanlder={addInput}>8</Botones>
          <Botones clickHanlder={addInput}>9</Botones>
          <Botones clickHanlder={addInput}>*</Botones>
        </div>
        <div className="row">
          <Botones clickHanlder={calcular}>=</Botones>
          <Botones clickHanlder={addInput}>0</Botones>
          <Botones clickHanlder={addInput}>.</Botones>
          <Botones clickHanlder={addInput}>/</Botones>
        </div>
        <div className="row">
          <ClearButton clickHanlder={clear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
