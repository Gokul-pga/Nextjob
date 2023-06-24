import SearchIcon from '@/assests/SearchIcon'
import React from 'react'
import { useRouter } from 'next/router'
import Button from './Button'
import JobCardContainer from './JobCardContainer'
import JobCard from './JobCard'

export default function CardComponent({open,setOpen,setOpenMod,job_Array,setjob_Array}) { 

    const router = useRouter()
    
  return (
        <>
           <div className='flex flex-col gap-4 px-2 p-2 rounded-md ' style={{overflow:"hidden"}}>
           <div className='flex bg-white border-white rounded w-4/5 h-10 items-center px-3 py-7 justify-between '>
                <div className='//bg-violet-500 font-medium'>
                    My 2023 Job Search
                </div>
                <div  className='flex bg-white h-5 items-center   gap-7 '>
                   <div className='flex w-80 gap-2 border px-5 py-2 rounded-md'>
                   <SearchIcon />
                    <input type='text' placeholder='Search' className='text-sm' />
                   </div>
                   <div >
                    <Button name={"Create"} customClass={"px-4 py-2 bg-[#FE5BAC] rounded-md"} onclick={()=>{setOpen(true)}}/>
                   </div>
                </div>
            </div>
            <div className='flex  gap-3 h-fit w-5/6' style={{overflowX:"scroll"}}>
                <JobCardContainer   title={"Saved"}  jobCount={job_Array.length} >
                    {job_Array.map((item,id) => {
                        return( <JobCard setOpenMod={setOpenMod} JobCompany={item.name} jobRole={item.company}/>)
                    })}
                   
                

                </JobCardContainer>

                <JobCardContainer  title={"Applied"}  jobCount={job_Array.length} >
                    <JobCard JobCompany={"Ajmera Infotech Inc."} jobRole={"UI/UX Designer"}/>
                </JobCardContainer>

                <JobCardContainer  title={"Interviewing"}  jobCount={JobCard.length} >
                    <JobCard JobCompany={"Ajmera Infotech Inc."} jobRole={"UI/UX Designer"}/>
                </JobCardContainer>

                <JobCardContainer  title={"Offer"}  jobCount={JobCard.length} >
                    <JobCard JobCompany={"Ajmera Infotech Inc."} jobRole={"UI/UX Designer"}/>
                </JobCardContainer>
            </div>
           </div>
        </> 
 )
}
