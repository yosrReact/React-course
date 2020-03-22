import React, { useState, useRef , memo} from "react"
import './TaskForm.css'
function TaskForm({addTask}) {
    const [title, setTitle]=useState("")
    const [duration, setDuration]=useState(0)
    const inputTitle = useRef(null)
    const handleAddTask=()=>{
      addTask(title, duration)
      setTitle("")
      setDuration(0)
      inputTitle.current.focus()
    }
  
    return (
      <div className="task-form">
        <input
          type="text"
          name="title"
          ref={inputTitle}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={duration}
          name="duration"
          onChange={e => setDuration(e.target.value)}
        />
        <button className="button" onClick={handleAddTask}>
          Add a task
        </button>
      </div>
    )
}
export default memo(TaskForm)