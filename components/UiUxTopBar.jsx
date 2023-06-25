import React, { useState } from "react";
import Image from "next/image";
import HouseIcon from "@/assests/HouseIcon";
import Location from "@/assests/Location.png";
import DolarSymbol from "@/assests/DolarSymbol.png";
import Button from "./Button";
import MenuItem from "./MenuItems";
import UIUXSidebar from "./UIUXSidebar";
import SelectInput from "./SelectInput";
import { OPTION } from "./AddJobModal";

export default function UiUxTopBar() {
  const [inputValue, setInputValue] = useState({
    type:'',
  })
  const {type} = inputValue;

    const Array_Topbar = [
        {
            icon: <Image src={require("../assests/GreenCardBox.png")} />,
            title:"Resume Name 75%",
            to:'/'
        },
        {
            icon: <Image src={require("../assests/NotesCardBox.png")} />,
            title:"Cover Letter Name",
            to:'/cover Letter'
        },
        {
            icon: <Image src={require("../assests/DoubleNotesBox.png")} />,
            title:"Mock Interview",
            to:'/mock interview'
        }
    ]

  return (
    <>
      <div className="w-full h-fit //bg-green-400 flex flex-col justify-between">
      <div className="flex flex-row px-5 py-5">
        <div className="flex w-full flex-row gap-2">
          <div>
            <Image
              className="h-15 w-71"
              src={require("../assests/UiUxModLogo.png")}
            />
          </div>
          <div className="flex flex-col w-full //bg-red-300">
            <div className="flex flex-row justify-between">
              
              <text className="text-md font-bold">
                UI/UX Designer (Mobile Apps)
              </text>
              
              
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row items-center gap-1">
                <HouseIcon />
                <text className="text-sm text-[.8rem] text-[#5A5A5A]">
                  PIXSTER STUDIO
                </text>
              </div>
              <div className="flex flex-row items-center gap-1">
                <Image
                  className="h-3 w-3 "
                  src={require("../assests/Location.png")}
                />
                <text className="text-sm text-[.8rem] text-[#5A5A5A]">
                  Ahmedabad, Gujarat, India
                </text>
              </div>
              <div className="flex flex-row items-center gap-1">
                <Image
                  className="h-3 w-3"
                  src={require("../assests/DolarSymbol.png")}
                />
                <text className="text-sm text-[.8rem] text-[#5A5A5A]">
                  Ahmedabad, Gujarat, India
                </text>
              </div>
              <div>
                <text className="text-[#8246FD] text-[.8rem] font-medium">
                  View Job Details{" "}
                </text>
              </div>
            </div>
            <div>
              <text className="text-[#9E9E9E] text-[.8rem]">
                Job added from linkedin.com on Tue May 30 2023.
              </text>
            </div>
          </div>
        </div>

        <div className="gap-2 flex flex-row h-fit">
            <Button name={"Delete"} customClass={"bg-red-500 px-9 py-1 rounded-md text-white font-medium "}/>
            <SelectInput options={OPTION} onChange={(e) =>{setInputValue({...inputValue,type:e})}} customClass={"bg-white px-9 py-1 rounded-md text-black font-medium "}/>
        </div>
      </div>

      <div className="border-t-2 ">

      </div>

        <div className="flex flex-row px-6 py-2">
            {Array_Topbar?.map((item,id) => {
                return(
                    <MenuItem classNames='border-2 bg-green-400'
               key={id}
                  data={item}
                  activeClass={"bg-green-200 w-[10rem] text-[.75rem] m-2 text-green-700 "}
                  nonActiveClass={"bg-[#fff] w-[10rem] text-[.75rem] m-2 text-[#000] border-2 "}
               />
                )
            })}
        </div>
        <div className="border-t-2 ">

      </div>

                <UIUXSidebar />
        </div>
    </>
  );
}
