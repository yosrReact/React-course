import React ,{memo} from "react"
import './Hello.css'

function Hello({value}){
    console.log("I'm executing Hello function/component")
    return <div>{value}</div>
}
export default memo(Hello)