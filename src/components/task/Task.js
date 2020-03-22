import React from "react"
import PropTypes from "prop-types"
import "./Task.css"
export default function Task({
  id,
  title,
  duration,
  deleteTask
}) {
  
  return (
    <div className="task">
      <div>
        <div className="title">
          {title} ({duration} mn)
        </div>
      </div>
      <div className="actions">
        <div>
          <button onClick={() => deleteTask(id)}>delete</button>
          <button>update</button>
        </div>
      </div>
    </div>
  )
}
Task.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
}

Task.defaultProps = {
  duration: 30
}
