import { useRouter } from "next/router";
import React from "react";
import { classNames } from "../utils/Classname";

const MenuItem = ({ data, activeClass,location, nonActiveClass,onClick }) => {
   const router = useRouter();

   return (
      <div
         onClick={onClick}  className={classNames(data?.to === location ? activeClass : nonActiveClass, "p-2 flex items-center gap-3 rounded-lg")}>
         <span className="h-[24px] w-[24px]">{data?.icon}</span>
         <span>{data?.title}</span>
      </div>
   );
};

export default MenuItem;