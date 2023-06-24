import React from 'react'
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Input from './Input';
import Button from './Button';
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function AddJobModal({open,setOpen}) {
   
   const [inputValue, setInputValue] = useState({
      company:'',
      title:'',
      url:''
   })
   const {company,title,url} = inputValue;
    const cancelButtonRef = useRef(null);
  return (
    <Transition.Root
    show={open}
    as={Fragment}>
    <Dialog
       as="div"
       className="relative z-10"
       initialFocus={cancelButtonRef}
       onClose={setOpen}>
       <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
       </Transition.Child>

       <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
             <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[30vw] sm:max-w-lg">
                   <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-center justify-center">
                         <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
            <Dialog.Title
               as="h3"
               className="text-base font-semibold leading-6 text-gray-900">
               Add Job
            </Dialog.Title>
            <div className="mt-2">
               <p className="text-sm text-gray-500">Create job card to track that job.</p>
            </div>
         </div>
                      </div>
                   </div>
                   <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                     <form
            action=""
            className="h-fit  flex flex-col gap-2">
            <Input placeholder="Company name" value={company} onChange={(e) =>{setInputValue({...inputValue,company:e.target.value})}}/>
            <Input placeholder="Job Title" value={title} onChange={(e) =>{setInputValue({...inputValue,title:e.target.value})}}/>
            <Input placeholder="Job URL" value={url} onChange={(e) =>{setInputValue({...inputValue,url:e.target.value})}}/>
             
         </form>
                   </div>
                   <div className="bg-gray-50  px-3 py-3 flex sm:flex justify-center gap-2 sm:px-6">
                      <Button
                         name={"Cancel"}
                         onclick={() => setOpen(false)}
                         customClass={"inline-flex w-full h-[50px] justify-center rounded-md bg-white border-2 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 sm:ml-3"}
                         ref={cancelButtonRef}
                      />
                      <Button
                         name={"Submit"}
                         customClass="inline-flex w-full h-[50px] justify-center rounded-md bg-[#FE5BAC] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f567ae] sm:ml-3 "
                         onclick={() => setOpen(false)}
                      />
                   </div>
                   <div className='flex flex-row gap-2  px-2 py-2 m-5 rounded-md bg-purple-100'>
                     <InfoCircledIcon className='bg-purple-100'/>
                     <text className='text-[0.6rem] text-[#5A5A5A]'>Did yoy know? You can save job directly from our Extension and have all the data imported in a simple click! It takes just a few seconds,</text>
                   </div>
                   {/* <div>Did yoy know? You can save job directly from our Extension and have all the data imported in a simple click! It takes just a few seconds,</div> */}
                </Dialog.Panel>
             </Transition.Child>
          </div>
       </div>
    </Dialog>
 </Transition.Root>
  )
}
