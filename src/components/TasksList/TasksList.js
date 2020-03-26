import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useHistory /*, Redirect*/, useRouteMatch } from "react-router-dom"

import Task from "../task/Task"
import "./TasksList.css"
export default function TasksList({ tasks, deleteTask, updateTask }) {
  const { push } = useHistory()
    let { path } = useRouteMatch()

  // use it if you will use Redirect
  // const [taskId, setTaskId]=useState('')

 
  const handleClick=(taskId)=>{
    //setTaskId(taskId)
    // or 
    // push(`/tasks/${taskId}`)
  }
  return (
    <div className="tasks-list">
      {/* {taskId!=="" && <Redirect to={`/tasks/${taskId}`} />} */}
      <div>
        {tasks.map(task => (
          <Link to={`${path}/${task.id}`}>
          {/* <div onClick={() => handleClick(task.id)}> */}
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              duration={task.duration}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  )
}
