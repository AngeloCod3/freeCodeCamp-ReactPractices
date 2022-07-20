import { useState } from 'react'
import './styles/Additem.css'
import {v4 as uuidv4} from 'uuid'

function Additem(props) {

  const [input,setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e.target.value);
  }

  const orderHandler = (e) => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }
    
    props.onSubmit(newTask);
  }

  return (
    <div className="form-container">
        <form onSubmit={orderHandler} className="form-task">
            <input type="text" className='input-task' placeholder='Escribe una tarea por realizar' name='text' onChange={changeHandler} />

            <button className="addTaskButton" onClick={orderHandler}> Agregar Tarea </button>
        </form>
    </div>
  )
}

export default Additem;