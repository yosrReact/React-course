import Axios from 'axios'

const tasks = [
  {
    id: "1",
    title: "Learn html",
    duration: 60,
    type: "beginner",
    date: "05/04/2020",
    description:
      "HTML is the standard markup language for documents designed to be displayed in a web browser"
  },
  {
    id: "2",
    title: "Learn react",
    duration: 30,
    type: "intermediate",
    date: "05/04/2020",
    description: "React is a JavaScript library created by Facebook"
  },
  {
    id: "3",
    title: "Learn node",
    duration: 50,
    type: "Advanced",
    date: "05/04/2020",
    description: "Node.js is an open source server environment; Node.js is free"
  }
]

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const postTask = async task => {
  const result = await Axios.post(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" ,task
  )
  console.log("result: ", result)
  // return result.data
}

export const fetchTaskById=async(taskId)=>{
   const result = await Axios.get(
     "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + taskId
   )
   console.log('result: ', result);
   return result.data
}

export const fetchTasks = async () => {
  // await delay(500)
  const result = await Axios.get(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/", 
  )
    // console.log('result: ', result);
    return result.data._embedded.tasks
  // return tasks
  // return tasks.filter(task => task.title.includes(searchValue))
}
