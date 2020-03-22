import React, { useState, useCallback } from "react"
import './App.css';
import TaskForm from './components/taskForm';
import TasksList from './components/TasksList/TasksList';

function App() {
  const steps = ["Enter the task title", "click on add task"]
  let loading=false

  const [tasks, setTasks] = useState([
    {
      id:"1",
      title: "Learn html",
      duration: 60,
    },
    {
      id:"2",
      title: "Learn react",
      duration: 30,
    },
    {
      id:"3",
      title: "Learn node",
      duration: 50,
    }
  ])

  
  const addTask=(title, duration)=>{
    setTasks([...tasks, { title, duration }])
  }
  //to use after to explain callback and memo
  // const memoizedCallback = useCallback(addTask, [])

   const deleteTask = (id) => {
     const newTasks=tasks.filter(task=>task.id!==id)
     setTasks(newTasks)
   }
  return (
    <div className="app">
      {loading && <div>Loading ... </div>}
      {!loading && (
        <div>
          <TaskForm addTask={addTask} />
          {<TasksList tasks={tasks} deleteTask={deleteTask} />}
        </div>
      )}
    </div>
  )
}

export default App;
