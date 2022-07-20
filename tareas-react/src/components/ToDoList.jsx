import Additem from "./Additem";
import Tareas from "./Tareas";
import './styles/ToDoList.css';
import { useState } from "react";


function ToDoList() {

  const [task,setTask] = useState([]);

  const addTask = tarea => {
   if (tarea.text.trim()){
    tarea.text = tarea.text.trim();

    const listaDeTareas = [tarea, ...task];
    setTask(listaDeTareas);
    console.log(tarea)
   } else {
    alert('Inserte una tarea valida');
   }
  }

  return (
    <>
      <Additem onSubmit={addTask} />
      <div className="tasklist-container">
        {
          task.map(tarea => <Tareas 
            key= {tarea.id}
            id= {tarea.id}
            task = {tarea.text} />)
        }
      </div>
    </>
  )
}

export default ToDoList;