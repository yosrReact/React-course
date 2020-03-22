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

   const updateTask = (id, title, duration) => {
     const newTasks = tasks.map(task => task.id === id?({title, duration}): task)
     setTasks(newTasks)
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
          {<TasksList tasks={tasks} deleteTask={deleteTask} updateTask ={updateTask} />}
        </div>
      )}
    </div>
  )
}

export default App;
