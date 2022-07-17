import './styles/App.css';
import logo from './images/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);

  const clickHandler = () => {
   setNumber(number + 1);
  }

  const resetHandler = () => {
    setNumber(0)
   }

  return (
    <div className="App">
      <div className="free-code-container">
        <img src={logo} alt="" />
      </div>
      <div className="contador-container">
        <Contador number={ number }/>
      </div>

      <div className='buttons-container'>
        <Boton texto='Click' IsClickButton={true} clickHandler={clickHandler}/>
        <Boton texto='Reset' IsClickButton={false} clickHandler={resetHandler}/>
      </div>
    </div>
  );
}

export default App;
