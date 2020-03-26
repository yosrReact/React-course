import React, { memo } from "react"
import Menu from "../menu/Menu"

import "./Courses.css"

function Courses({ value }) {
  return (
    <div className="hello">
      {/* <Menu /> */}
      <div>{value}</div>
    </div>
  )
}
export default memo(Courses)
