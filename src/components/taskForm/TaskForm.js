import React, { useState, useRef, memo, useEffect } from "react"
import './TaskForm.css'
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("learn")
  const [duration, setDuration] = useState(0)
  
  const inputTitle = useRef(null)
  const handleAddTask = () => {
    addTask(title, duration)
    inputTitle.current.focus()
    setTitle("learn")
    setDuration(0)
  }
  useEffect(() => {
    document.title = title
    // setTitle("hello"+ Math.random())
  })


  const handleTitle = e => setTitle(e.target.value)
  return (
    <div className="task-form">
      <input
        type="text"
        name="title"
        value={title}
        ref={inputTitle}
        onChange={handleTitle}
      />
      <input
        type="text"
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