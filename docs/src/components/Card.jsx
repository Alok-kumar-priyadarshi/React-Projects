import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({data , refrence}) => {
  return (
    <div>

        <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className="relative overflow-hidden w-60 h-72 rounded-[20px] bg-zinc-900/90 p-4 text-zinc-200">

        <FaFileAlt /> 
        <p className='mt-5 text-sm font-semibold leading-none '>
          {data.desc}

        </p>

        <div className="footer absolute w-full bottom-0 h-20 left-0 ">

          <div className="flex items-center mb-3 justify justify-evenly">

            <h2 className=''>{data.filesize}</h2>

            <span className='rounded-full w-7 h-7 bg-zinc-300 flex justify-center items-center cursor-pointer'>
              {data.close ? <IoCloseSharp color='black' size="1.5em"/> : <PiDownloadSimpleFill color='black' size="1.5em"/> }
              

            </span>


          </div>


          <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center `}>

            {data.tag.isOpen ? (
              <h3 className='text-xl py-2 font-semibold '>
              {data.tag.tagTitle}
              </h3>

            ):null
          }

            

          </div>

        </div>


        </motion.div>


    </div>
  )
}

export default Card