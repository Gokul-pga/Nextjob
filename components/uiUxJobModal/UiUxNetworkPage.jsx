import SearchIcon from '@/assests/SearchIcon'
import React from 'react'
import Button from '../Button'

export default function UiUxNetworkPage() {
  return (
        <>
             <div className='flex bg-[#F7F3FF] border-white rounded w-4/5 h-10 items-center px-3 py-7 justify-between '>
                <div className='//bg-violet-500 text-[1.125rem] font-medium'>
                   Your Network
                </div>
                <div  className='flex  h-5 items-center   gap-7 '>
                   <div className='flex bg-white w-55 gap-2 border px-5 py-2 rounded-lg'>
                   <SearchIcon />
                    <input type='text' placeholder='Search' className='text-sm' />
                   </div>
                   <div >
                    <Button name={"Create New"} customClass={"px-4 py-2 bg-[#57A4F2] text-[#fff] text-bold rounded-md"} onclick={()=>{setOpen(true)}}/>
                   </div>
                </div>
            </div>
        </>
    )
}
