import React, { useState } from 'react'
import Image from 'next/image';
import MenuItem from './MenuItems';
import UiUxJobDescPg from './uiUxJobModal/UiUxJobDescPg';
import UiUxCompanyPage from './uiUxJobModal/UiUxCompanyPage';
import UiUxNotesPage from './uiUxJobModal/UiUxNotesPage';
import UiUxNetworkPage from './uiUxJobModal/UiUxNetworkPage';
import JobIcon from '@/assests/JobIcon';
import CompanyIcon from '@/assests/CompanyIcon';
import NotesIcon from '@/assests/NotesIcon';
import NetworkIcon from '@/assests/NetworkIcon';

export default function UIUXSidebar() {
  const [selected, setselected] = useState("jobDescription")
    const Array_Item = [
        {
            title: "Job Description",
            icon:  <JobIcon color={selected==="jobDescription"?"#8246FD":"#5A5A5A"}/>,
            to:"jobDescription"
        },
        {
            title: "Company",
            icon:  <CompanyIcon color={selected==="uiuxcompanypage"?"#8246FD":"#5A5A5A"}/>,
            to:"uiuxcompanypage"
        },
        {
            title: "Notes",
            icon: <NotesIcon color={selected==="notes"?"#8246FD":"#5A5A5A"}/>,
            to:"notes"
        },
        {
            title: "Networking",
            icon:< NetworkIcon color={selected==="networking"?"#8246FD":"#5A5A5A"} />,
            to:"networking"
        }
    ]

    const Array_ItemB = [
        {
            icon: <Image src={require("../assests/RoundedIcon.png")} />,
            time:"Today, 1:12 PM",
            title:"Moved to Saved",
            description:"You moved this job from Applied to saved"
        },
        {
            icon: <Image src={require("../assests/RoundedIcon.png")} />,
            time:"Yesterday, 1:12 PM",
            title:"Moved to Applied",
            description:"You moved this job from Applied to saved"
        },
        {
            icon: <Image src={require("../assests/RoundedIcon.png")} />,
            time:"Yesterday, 1:12 PM",
            title:"Moved to Applied",
            description:"You moved this job from Applied to saved"
        }
    ]
  return (
   <>
        <div className='flex flex-row justify-between px-3 '>
            <div>
                {Array_Item?.map((item,id) => {
                    return(
                        < MenuItem 
                        onClick={() =>{setselected(item?.to)}}
                        key={id}
                        data={item}
                        location={selected}
                        activeClass={"bg-[#F7F3FF] w-[12rem] text-[.8rem] m-2 text-violet-800 text-medium"}
                        nonActiveClass={"bg-[#fff] w-[12rem] text-[.8rem] m-2 text-[#5A5A5A]"}
                        />
                    )
                })}
            </div>

           {/* {Children}  */}

          {selected === "jobDescription" && <UiUxJobDescPg/>}
{selected === "uiuxcompanypage" && <UiUxCompanyPage/>}
{selected === "notes" && <UiUxNotesPage/>}
{selected === "networking" && <UiUxNetworkPage/>}

     
           




            <div className=' m-2 flex flex-col'>
                <div>
                    <text>Time Line</text>
                </div>
                <div>
                        {Array_ItemB?.map((item,id) => {
                            return(
                                < MenuItem key={id} data={item} />
                                )
                        })}
                </div>
            </div>
        </div>
   </>
  )
}
