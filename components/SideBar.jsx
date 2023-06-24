/** @format */

import React from "react";
import { useRouter } from "next/router";
import SuggestLogo from "@/assests/suggestLogo";
import ReportLogo from "@/assests/reportLogo";
import MenuItem from "./MenuItems";
import LoopLogo from "@/assests/LoopLogo";
import BoardsLogo from "@/assests/BoardsLogo";
import NetworkingLogo from "@/assests/NetworkingLogo";
import ArchivedJobLogo from "@/assests/ArchivedJobLogo";

export default function SideBar() {
   const location = useRouter().pathname;

   const SIDEBAR_ITEMS = [
      {
         title: "Boards",
         icon: <BoardsLogo color={location === "/" ? "#fff" : "#000"} />,
         to: "/",
      },
      {
         title: "Networking",
         icon: <NetworkingLogo color={location === "/networking" ? "#fff" : "#000"} />,
         to: "/networking",
      },
      {
         title: "Archive Jobs",
         icon: <ArchivedJobLogo color={location === "/archive" ? "#fff" : "#000"} />,
         to: "/archive",
      },
      {
         title: "Loop Settings",
         icon: <LoopLogo color={location === "/settings" ? "#fff" : "#000"} />,
         to: "/settings",
      },
   ];

   const SIDE_BARS2 = [
     
      {
         title: "Suggest a f eature",
         icon: <SuggestLogo color={location === "/feature" ? "#fff" : "#000"} />,
         to: "/feature",
      },
      {
         title: "Report an Issue",
         icon: <ReportLogo color={location === "/issue" ? "#fff" : "#000"} />,
         to: "/issue",
      },
   ]

   return (
      <div className=" flex flex-col px-2 py-1 bg-white rounded-lg gap-4  ">
         <div className=" ">
         {SIDEBAR_ITEMS?.map((item,id) => {
            return (
               <MenuItem
               key={id}
                  data={item}
                  activeClass={"bg-[#8246FD] w-[12rem] m-2 text-[#fff] "}
                  nonActiveClass={"bg-[#fff] w-[12rem] m-2 text-[#000]"}
               />
            );
         })}
         </div>
         <div className="border-t-2 border-[#E6E6E6] ">
            
         </div>
        <div className=" ">
        {SIDE_BARS2?.map((item,id) => {
            return (
               <MenuItem
                  key={id}
                  data={item}
                  activeClass={"bg-[#8246FD] w-[12rem] m-2 text-[#fff]"}
                  nonActiveClass={"bg-[#fff] w-[12rem] m-2 text-[#000]"}
               />
            );
         })}
        </div>
      </div>
   );
}
