import React from 'react'
import Button from '../Button'
import Image from 'next/image'

export default function UiUxNotesPage() {
  return (
    <>
        <div className='w-full m-5 px-3 py-5 gap-3 rounded-md flex flex-col bg-[#F7F3FF]'>
                <div className='flex flex-row justify-between //bg-orange-400 px-2 py-2'>
              <text className='text-black text-[1.125rem] font-bold'>Notes</text>
              <Button name={"Create New Note"} customClass={"px-6 py-1 rounded-md //bg-[#C9BCE3] bg-[#57A4F2]"}/>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Image className=' w-40 h-50' src={require("../../assests/BigNotesLogo.png")} /> 
                    <text className='text-[1.5rem] text-[#5A5A5A] font-medium'>No Notes Created</text>
                    <text className='text-[.875rem] text=[#5A5A5A]'>You can tap the "Create New Notes" Button to start taking notes!</text>
                </div>
        </div>
    </>
  )
}
