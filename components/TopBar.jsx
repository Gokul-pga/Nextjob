/** @format */

import React from "react";
import NavDropdown from "./NavDropdown";
import BellLogo from "../assests/BellLogo";
import AvatarComponent from "./AvatarComp";
import NextJobLogo from "@/assests/NextJobLogo";

export default function TopBar() {
   const OPTIONS = [
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
   ];

   return ( 
      <div className="  p-3 flex flex-row justify-between shadow-lg bg-white">
         <div className="bg-white flex flex-row items-center gap-5">
            <NextJobLogo />
            <NavDropdown
               label={"Resume Builder"}
               options={OPTIONS}
            />
            <NavDropdown
               label={"Cover Letter"}
               options={OPTIONS}
            />
            <NavDropdown
               label={"LinkedIn Review"}
               options={OPTIONS}
            />
            <NavDropdown
               label={"Interview"}
               options={OPTIONS}
            />
            <NavDropdown
               customClassColors={"bg-[#F7F3FF] text-[#8246FD] hover:bg-[#EAE2FE] hover:text-[#8246FD]"}
               label={"Job Tracker & Networking"}
               options={OPTIONS}
            />
         </div>
         <div className="bg-white flex items-center gap-5">
            <span className="flex items-center justify-center ">
               <BellLogo />
            </span>
            <span>
               <AvatarComponent
                  profileDetails={{
                     name: "GS",
                     profile_url: null,
                  }}
               />
            </span>
         </div>
      </div>
   );
}
