import React, { memo } from "react"
import Menu from "../menu/Menu"

import "./Hello.css"

function Hello({ value }) {
  function delay(ms) {
   
    return new Promise((resolve, reject) => {
    if(ms>0) 
      setTimeout(()=>resolve("hello"), ms)
    else
      reject("ms must be greater than 0")
    }
  )
  }




  function exampleWithPromise(){
    delay(-10).then(
      (result)=>console.log("resolved with promise: "+result)
      )
      .catch((error)=>console.log("There is an error: "+error))
  }
  // exampleWithPromise()

   const exampleWithAsyncAwait= async()=> {
     try{
        const result= await delay(-10)
        console.log("resolved with async await: "+result)
     }
     catch(error){
        console.log("There is an error:  " + error)
     }
    }
    exampleWithAsyncAwait()

  return (
    <div className="hello">
      {/* <Menu /> */}
      <div>{value}</div>
    </div>
  )
}
export default memo(Hello)
