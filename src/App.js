import React, { useState, useCallback, useEffect } from "react"
import "./App.css"
import TaskForm from "./components/taskForm"
import TasksList from "./components/TasksList/TasksList"
import { fetchTasks } from "./services/tasks.service"

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const [isVisible, setIsVisible] = useState(true)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     const result = await fetchTasks()
  //     setTasks(result)
  //     setLoading(false)
  //   }
  //   console.log("useEffect")

  //   fetchData()
  // }, [])



  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (searchValue.length===0) {
  //       console.log("tasks empty")
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await fetchTasks(searchValue)
  //       console.log("tasks form api")
  //       setTasks(result)
  //       setLoading(false)
  //     }
  //   }
  //   console.log("searchValue", searchValue)
  //   fetchData()
  // }, [searchValue])




 
  useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      setLoading(true)
      if (!searchValue) {
        setTasks([])
        setLoading(false)
      } else {
        const result = await fetchTasks(searchValue)
        console.log("result: ", didCancel)
        if (!didCancel) {
          setTasks(result)
          setLoading(false)
        }
      }
    }
    // console.log("useEffect:", searchValue)
    fetchData()

    return () => {
      console.log("cleanup: ", searchValue)
      didCancel = true
    }

  }, [searchValue])



  const addTask = (title, duration) => {
    setTasks(previousTasks => [
      ...previousTasks,
      { id: previousTasks.length + 1, title, duration: Number(duration) }
    ])
  }

  const updateTask = (id, title, duration) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { title, duration } : task
    )
    setTasks(newTasks)
  }
  const memoizedCallback = useCallback(addTask, [])

  const deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id)
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

      <div>
        <TaskForm addTask={memoizedCallback} />
        <div className="search">
          <input
            type="search"
            name="search"
            placeholder="search task by name"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        {loading ? (
          <div>Loading ... </div>
        ) : (
          isVisible && (
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )
        )}
      </div>
    </div>
  )
}

export default App
