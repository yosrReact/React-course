import React, { memo } from "react"
import Menu from "../menu/Menu"

import "./Hello.css"

function Hello({ value }) {
  return (
    <div className="hello">
      <Menu />
      <div>{value}</div>
    </div>
  )
}
export default memo(Hello)
