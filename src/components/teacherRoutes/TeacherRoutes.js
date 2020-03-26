import React from "react"
// import "./App.css"
import TasksPage from "../tasksPage/TasksPage"
import Hello from "../hello/Hello"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import TaskDetails from "../taskDetails/TaskDetails"
import TeacherLayout from "./teacherLayout/TeacherLayout"
function TeacherRoutes() {
    let { path } = useRouteMatch()
  return (
    <div className="teacher-routes">
        Hi I'm  in teacher routes
      {/* <Router> */}
      <TeacherLayout>
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/hello`} />
          </Route>
          <Route exact path={`${path}/hello`}>
            <Hello value="Welcome to my web site" />
          </Route>

          <Route exact path={`${path}/tasks`}>
            <TasksPage />
          </Route>

          <Route exact path={`${path}/tasks/:taskId`}>
            <TaskDetails />
          </Route>

          <Route exact path={`${path}/`}>
            <Hello value="Welcome to my web site" />
          </Route>
        </Switch>
      </TeacherLayout>

      {/* </Router> */}
    </div>
  )
}

export default TeacherRoutes
