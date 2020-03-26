import React from "react"
import { Link, NavLink, useRouteMatch } from "react-router-dom"
import './TeacherMenu.css'
function TeacherMenu() {
    let { path } = useRouteMatch()

  return (
    <ul>
      <li>
        <NavLink
          to={`${path}/hello`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/hello") || pathname === "/"
          }
        >
          Home
        </NavLink>
        {/* <Link to="/hello">Home</Link> */}
      </li>
      <li>
        <NavLink to={`${path}/tasks`} activeClassName="active">
          My tasks
        </NavLink>
        {/* <Link to="/tasks"> My tasks</Link> */}
      </li>
    </ul>
  )
}

export default TeacherMenu
