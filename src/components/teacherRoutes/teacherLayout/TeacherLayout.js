import React from "react"
import TeacherMenu from "../teacherMenu/TeacherMenu"

function TeacherLayout({ children }) {
  return (
    <>
      <TeacherMenu />
      {children}
    </>
  )
}
export default TeacherLayout
