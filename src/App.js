import React from "react"
import "./App.css"
import TasksPage from "./components/tasksPage/TasksPage"
import Hello from  "./components/hello/Hello"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TaskDetails from './components/taskDetails/TaskDetails';
function App() {
  return (
    <div className="app">
      <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/hello">
            <Hello value="Welcome to my web site" />
          </Route>
          <Route exact path="/tasks">
            <TasksPage />
          </Route>
          <Route path="/tasks/:taskId">
            <TaskDetails />
          </Route>
          <Route path="/">
            <Hello value="Welcome to my web site" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
