import React, {useState} from 'react'
import Task from '../task/Task';
import './TasksList.css'
export default function TasksList({tasks, deleteTask}) {

  const [isVisible, setIsVisible]=useState(true)
  

  const toggleVisibility=()=>{
    setIsVisible(!isVisible)
  }
    return (
      <div className="tasks-list">
        <div className="toggle">
          <button onClick={toggleVisibility}>Toggle visibility</button>
        </div>
        <div>
          {isVisible &&
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                duration={task.duration}
                details={task.details}
                deleteTask={deleteTask}
              >
                {task.description}
                <div>Hello</div>
                <div>Hi</div>
              </Task>
            ))}
        </div>
      </div>
    )
}