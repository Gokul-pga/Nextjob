import Image from 'next/image'
import React from 'react'

export default function UiUxJobDescPg() {
  return (
    <>
           <div className='w-full m-5 px-3 py-5 gap-3 rounded-md bg-[#F7F3FF] flex flex-col overflow-hidden overflow-y-scroll'>
                <div className='flex flex-row justify-between'>
              <text className='text-black font-bold text-[1.125rem]'>Description</text>
              <Image className='h-5 w-5' src={require("../../assests/PencilIcon.png")} />
                </div>

                <div className='flex flex-col gap-2'>
                    <text className='text-black font-medium text-[1rem]'>About the job</text>
                    <text className='text-[.875rem]'>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.</text>
                    <text className='text-[.875rem]'> As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork – all essential skills for a successful career in this field.</text>
                </div>

                <div className='gap-2'>
                    <text  className='text-black font-medium text-[1rem]'>Responsibilities</text>
                    <div className='flex flex-col text-[.875rem] pl-5'>
                             <text> Assist in the research, design, and prototyping of user interfaces and experiences</text>
                            <text> Conduct user research and develop personas, user stories, and user flows</text>
                            <text> Create wireframes, mockups, and prototypes to effectively communicate design ideas</text>
                            <text>Collaborate with cross-functional teams to gather requirements and develop solutions</text>
                            <text> Participate in usability testing and incorporate feedback into design iterations</text>
                            <text>Support the team with general administrative tasks as needed </text>
                            <text>Contribute to the creation of design documentation and style guides</text>
                    </div>
                </div>
        </div>
    </>
    )
}
