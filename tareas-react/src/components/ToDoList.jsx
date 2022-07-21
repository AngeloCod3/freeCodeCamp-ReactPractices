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

   } else {
    alert('Inserte una tarea valida');
   }
  }

  const eliminarTarea = (id) => {
    const actualizacion = task.filter(tarea => tarea.id !== id);
    setTask(actualizacion);
  }

  const completarTarea = (id) => {
    const actualizacionCompletar = task.map(tarea => {
      if(tarea.id === id){
        tarea.complete = !tarea.complete;
      } 
      return task;
      
    });
    setTask(actualizacionCompletar);
    console.log(task);
  }

  return (
    <>
      <Additem onSubmit={addTask} />
      <div className="tasklist-container">
        {
          task.map(tarea => <Tareas 
            key= {tarea.id}
            id= {tarea.id}
            task = {tarea.text}
            completarTarea = {completarTarea}
            eliminarTarea={eliminarTarea}/>)
        }
      </div>
    </>
  )
}

export default ToDoList;