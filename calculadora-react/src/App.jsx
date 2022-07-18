import './App.css';
import Botones from './components/Botones';
import freeLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <img src={freeLogo} alt="Logo" />

      <div className="calculadora-container">
        <div className="row">
          <Botones>1</Botones>
        </div>
        <div className="row">
          <Botones>2</Botones>
        </div>
        <div className="row">
          <Botones>3</Botones>
          </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
