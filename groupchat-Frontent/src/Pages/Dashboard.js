import React, { useEffect, useState } from 'react'
import Chatlist from '../Components/Dashboard/Chatlist'

const Dashboard = () => {
const [messageData, setMessageData] = useState({
   "userId": "" ,
   "userName":"" ,
   "userEmail": "",
   "message":""
})
   useEffect(()=>{
let user= JSON.parse(localStorage.getItem("user"))
console.log(user);
setMessageData({
   ...messageData,userName:user.fullName,userEmail:user.email,userId:user._id
})
   },[])
const logoutUser=()=>{
   localStorage.removeItem("token")
   alert(`${messageData.userName} logout Successfully`)
 
   window.location.reload()
}
   
  return (
    <>
    <div style={{display:"flex"}}>
    <div style={{width:"300px"}}>
  <section>
<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar" >
<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
   <ul className="space-y-2 font-medium">
      <li>
         <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">{messageData.userName}</div>
         </a>
         <div className="ml-3" >{messageData.userEmail}</div>
      </li>
      <li>
         <div onClick={logoutUser} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
         </div>
      </li>
  
   </ul>
   
</div>
</aside>
  </section>
  </div>
  <div style={{ display:"flex", justifyContent:"center",width:"100%",backgroundImage:"url('https://picsum.photos/200/300')"}}>
  <Chatlist messageData={messageData} setMessageData={setMessageData} />
  </div>
  </div>


    </>
  )
}

export default Dashboard