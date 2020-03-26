import React from "react"
import "./App.css"
import TasksPage from "./components/tasksPage/TasksPage"
import Hello from  "./components/hello/Hello"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import TaskDetails from './components/taskDetails/TaskDetails';
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import StudentRoutes from "./components/studentRoutes/StudentRoutes"
function App() {
  return (
    <div className="app">
      Hello
      <Router>
        <Switch>
          <Route path="/teacher">
            <TeacherRoutes />
          </Route>
          <Route path="/student">
            <StudentRoutes />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
