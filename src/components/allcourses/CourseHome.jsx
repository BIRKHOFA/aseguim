import React from "react"
import Back from "../common/back/Back"
import List from "../list/List"
import CoursesCard from "./CoursesCard"
import Heading from "../common/heading/Heading"
// import {DataGrid} from '@mui/x-data-grid'
const CourseHome = () => {
  return (
    <>
      <Back title='Explorer Les Ressources' />
      <List/>
      <Heading subtitle='Formations parascolaire' title='Info de Base' />
      <CoursesCard />
      {/* <OnlineCourses /> */}
    </>
  )
}

export default CourseHome
