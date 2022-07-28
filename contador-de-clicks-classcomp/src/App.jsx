import './styles/App.css';
import logo from './images/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state = {
      number: 0
    };
  }

  clickHandler() {
    this.setState(({number})=> ({number: number + 1}));
  }

  resetHandler(){
    this.setState({number: 0});
  }

  render() {
    return (
      <div className="App">
      <div className="free-code-container">
        <img src={logo} alt="" />
      </div>
      <div className="contador-container">
        <Contador number={ this.state.number }/>
      </div>

      <div className='buttons-container'>
        <Boton texto='Click' IsClickButton={true} clickHandler={this.clickHandler}/>
        <Boton texto='Reset' IsClickButton={false} clickHandler={this.resetHandler}/>
      </div>
    </div>
    )
  }
}

export default App;
