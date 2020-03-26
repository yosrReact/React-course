import React from "react"
import { Link, NavLink, useRouteMatch } from "react-router-dom"
import './StudentMenu.css'
function StudentMenu() {
    let { path } = useRouteMatch()

  return (
    <ul>
      <li>
        <NavLink to={`${path}/courses`} activeClassName="active">
          My courses
        </NavLink>
      </li>
    </ul>
  )
}

export default StudentMenu
