import React, { useEffect, useState } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useParams, useLocation } from "react-router-dom"
import './TaskDetails.css'
function TaskDetails() {
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({})
 
 
  const { taskId } = useParams()
  console.log('useParams(): ', useParams());
  console.log('useLocation(): ', useLocation());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchTaskById(taskId)
      setTask(result)
      setLoading(false)
    }
    fetchData()
  }, [taskId])

  return (
    <div className="task-details">
      <div className="header">Task details</div>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="title">Title</div>
          <div className="value">{task.title}</div>

          <div className="title">Title</div>
          <div className="value">{task.duration}</div>

          <div className="title">Type</div>
          <div className="value">{task.type}</div>

          <div className="title">Date</div>
          <div className="value">{task.date}</div>

          <div className="title">Description</div>
          <div className="value">{task.description}</div>
        </>
      )}
    </div>
  )
}

export default TaskDetails
