import MenuIcon from '@/assests/MenuIcon'
import React from 'react'
import HouseIcon from '@/assests/HouseIcon'
import Image from 'next/image' 

export default function JobCard({jobRole,JobCompany,setOpenMod}) {
  return (
    <div  className='w-[18rem] px-3 py-3  rounded-md flex flex-col gap-3 bg-white' onClick={()=>{setOpenMod(true)}}>
    <div className='flex flex-row justify-between   '>
       <div className='flex flex-row items-center  gap-3' >
        <div>
            <Image src={require("../assests/UiUxLogo.png")} /> 
        </div>
        <div className='flex flex-col p-0'>
            <div className=''>
                <text className='text-sm font-medium'>{jobRole}</text>
            </div>
            <div className='flex flex-row gap-2'>
                <HouseIcon />
                <text className='text-xs text-gray-400 '>{JobCompany}</text>
            </div>
        </div>
        </div>
        <div >
        <MenuIcon className='cursor-pointer' />
        </div>
    </div>

    <div className='w-[9.2rem] flex flex-row gap-3 align-center '>
        <div className='flex flex-row gap-2 px-1 py-1 bg-green-200 rounded-md'>
            <div className='flex items-center '>
            <Image className='h-5 w-10' src={require("../assests/GreenCardBox.png")} />
            </div>
            <div className='align-center justify-center'> 
                <text className='text-sm text-[#059669]'>75%</text>
            </div>
        </div>
       
        <div className=' border-dashed border-2 border-gray-600 px-2 py-1 items-center flex rounded-3xl  '>
        <Image className='h-3 w-5' src={require("../assests/NotesCardBox.png")} />
        </div>

        <div className='border-dashed border-2 border-gray-600 px-2 py-2 items-center justify-center rounded-3xl  '>
        <Image className='h-3 w-5' src={require("../assests/DoubleNotesBox.png")} />
        </div>
    </div>
    </div>
  )
}
