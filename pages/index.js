import AddJobModal from "@/components/AddJobModal";
import CardComponent from "@/components/CardComponent";
import UiUxModalBox from "@/components/UiUxModalBox";
import Layout from "@/layout/Layout";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openMod, setOpenMod] = useState(false)
  const [job_Array, setjob_Array] = useState([
    {
      name:"Ui/Ux Designer",
      company:"Ajmera Infotech Inc.",
      jobType:"Saved"
    },
    {
      name:"Ui/Ux Designer",
      company:"Ajmera Infotech Inc."
    }
  ])
  const [open, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <div className="w-screen h-screen flex gap-5 px-4">
          <CardComponent job_Array={job_Array} setjob_Array={setjob_Array} open={open} setOpen={setOpen} setOpenMod={setOpenMod}/>
        </div>
        <AddJobModal open={open} setOpen={setOpen} />
        <UiUxModalBox openMod={openMod} setOpenMod={setOpenMod} />
      </Layout>
    </>
  );
}
