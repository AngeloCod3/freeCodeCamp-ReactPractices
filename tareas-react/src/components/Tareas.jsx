import './styles/Tareas.css';
import { MdIncompleteCircle } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md'

function Tareas({id, task, complete, completarTarea, eliminarTarea}) {
  return (
    <div className="task-container" onClick={() => completarTarea(id)}>

      <div className={complete ? 'text-content complete' : 'text-content'}>
        {task} <MdIncompleteCircle />
      </div>
      
      <div className="task-icon" onClick={() => eliminarTarea(id   )}>
          <MdDeleteForever className='task-icon'/>
      </div>
    </div>
  )
}

export default Tareas; 