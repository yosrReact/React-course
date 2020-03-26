import React from "react"
import StudentMenu from "../studentMenu/StudentMenu"

function StudentLayout({ children }) {
  return (
    <>
      <StudentMenu />
      {children}
    </>
  )
}
export default StudentLayout
