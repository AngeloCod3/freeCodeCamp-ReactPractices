import React from 'react'
import Logo from './components/Logo'
import Tareas from './components/Tareas'
import Additem from './components/Additem'
import ToDoList from './components/ToDoList'
import './App.css'

 

function App() {
  return (
    <div className="toDoList-container">
      <h1>Mis Tareas</h1>
      <ToDoList></ToDoList>
    </div>
  )
}

export default App;