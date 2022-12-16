import * as React from 'react'
import {  useGetAllPostQuery 
  ,useGetoneidQuery,
  useGetpostbylimitQuery,
  useDeletepostQuery,
  useCreatepostQuery,
  useUpdatepostMutation
} from './Api'

const Home=()=> {
  
// const update=useUpdatepostMutation(5)
// console.log(update)

 // const name=useGetoneidQuery(5)
 // console.log("hhh",name)

// const del=useDeletepostQuery(4)
// console.log(del)
  
  // const limitdata=useGetpostbylimitQuery(5)
  // console.log(limitdata)


  // const responceinfo =  useGetAllPostQuery()
  //  console.log("result",responceinfo)

  // const inset=useCreatepostQuery(5)
  // console.log("hh",inset)

 

  return (
    <div >
     {/* <div>{update.currentData}</div> */}
        
    </div>
  )
}
export default Home