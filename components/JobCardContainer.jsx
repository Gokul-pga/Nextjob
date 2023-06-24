
import React from 'react'
export default function JobCardContainer({title,jobCount,children}) {
  return (
    <>
    <div className='gap-2 flex flex-col bg-[#F5F4F4] w-[19rem] rounded-md px-2 py-2 h-screen ' >
            <div className='flex flex-row rounded-md w-[18rem] justify-between px-3 py-3'>
                <text className='font-medium'>{title}</text>
                <text>{jobCount} Jobs</text>
            </div>

           {children}
        </div>
    </>
  )
}
