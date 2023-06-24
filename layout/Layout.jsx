import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

export default function Layout({children}) {
  return (
    <div className="flex flex-col h-100vh gap-5 bg-orange-300r " style={{overflow:"hidden"}} >
      <TopBar/>
      <div className="w-screen h-screen flex bg-violet-600 ">
            <div className="h-fit w-3/6 px-3 py-5 rounded-md bg-[#e71c1c]">
               <SideBar /> 
            </div >
           <div className="w-[83vw]">{children}</div>
         </div>
    </div>
  )
}
