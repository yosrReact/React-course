import React from "react"
// import "./App.css"
import Courses from "../courses/Courses"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import StudentLayout from "./studentLayout/StudentLayout"
function StudentRoutes() {
    let { path, url } = useRouteMatch()
  return (
    <div className="student-routes">
      {/* <Router> */}
      <StudentLayout>
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/courses`} />
          </Route>
          <Route exact path={`${path}/courses`}>
            <Courses value="Hi dear student. Welcome to my the student part of the site" />
          </Route>

          <Route exact path={`${path}/`}>
            <Courses value="Hi dear student. Welcome to my the student part of the site" />
          </Route>
        </Switch>
      </StudentLayout>

      {/* </Router> */}
    </div>
  )
}

export default StudentRoutes
