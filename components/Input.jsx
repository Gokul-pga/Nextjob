import React from "react";

const Input = ({ label, ...props }) => {
   return (
      <div>
         <label
            htmlFor=""
            className="">
            {label}
         </label>
         <input
            {...props}
            className="w-full ring-1 h-[45px] px-3 rounded-md ring-gray-300 py-2 text-sm font-semibold text-gray-900 shadow-sm"
         />
      </div>
   );
};

export default Input;