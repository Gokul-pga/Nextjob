import React from 'react'
import Image from 'next/image';
import Img_source from '../img_source';
import PencilIcon from "../../assests/PencilIcon.png"


export default function UiUxCompanyPage() {
  
  return (
    <>
  
        
        <div className='w-full m-5 px-3 py-5 gap-3 rounded-md bg-[#F7F3FF] flex flex-col'>
            <div className='flex flex-row justify-between'>
              <text className='text-black font-bold'>Company info</text>
            </div>
            <Img_source src={PencilIcon}/>
            <div className='flex flex-row items-center gap-3'>
            <Image
              className="h-15 w-14"
              src={require("../../assests/UiUxModLogo.png")}
            />
            <div className='text-black font-bold '>PIXSTER STUDIO</div>
            </div>
            <div className='text-[#5A5A5A] text-[.8rem] w-5/6'>
                <text>Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world. </text>
            </div>
            <div className='flex flex-col text-[.8rem]'>
                <text className='font-bold'>Website</text>
                <text className='text-violet-500 underline decoration-solid'>https://www.linkedin.com/company/pixster-studio/life/</text>
            </div>
            <div className='flex flex-col text-[.8rem]'>
                 <text className='font-bold'>Industry</text>
                <text className=''>Information Technology & Center</text>
            </div>
            <div className='flex flex-col text-[.8rem]'>
                 <text className='font-bold'>Employee Count</text>
                <text className=''>11-50</text>
            </div>
            <div className='flex flex-col text-[.8rem]'>
                 <text className='font-bold'>Address</text>
                <text className=''>Ahmedabad, Gujarat, India</text>
            </div>
          </div>


    </>
    )
}
