import React, { useState, useCallback } from "react"
import './App.css';
import TaskForm from './components/taskForm';
import TasksList from './components/TasksList/TasksList';
import Hello from './components/hello/Hello'

function App() {
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

  const [isVisible, setIsVisible]=useState(true)



  const addTask=(title, duration)=>{
    setTasks(previousTasks => [
      ...previousTasks,
      { id: tasks.length + 1, title, duration: Number(duration) }
    ])
  }

   const updateTask = (id, title, duration) => {
     const newTasks = tasks.map(task => task.id === id?({title, duration}): task)
     setTasks(newTasks)
   }
  //to use after to explain callback and memo
  const memoizedCallback = useCallback(addTask, [])

   const deleteTask = (id) => {
     const newTasks=tasks.filter(task=>task.id!==id)
     setTasks(newTasks)
   }
 const toggleVisibility = () => {
   setIsVisible(!isVisible)
 }
  return (
    <div className="app">
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      {loading && <div>Loading ... </div>}
      {!loading && (
        <div>
          <TaskForm addTask={memoizedCallback} />

           {isVisible && <TasksList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
            
          />}
          <Hello value="hello" />
        </div>
      )}
    </div>
  )
}

export default App;
