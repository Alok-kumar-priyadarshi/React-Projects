import React, { useRef, useState } from 'react'
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null);

  const data = [
  {

    desc:"hello world my name is alok .",
    filesize:".9mb",
    close:true,
    tag: { isOpen: true , tagTitle: "Download Now..." , tagColor: "green"},

  },
  {

    desc:"hello world my name is alok .",
    filesize:".9mb",
    close:false,
    tag: { isOpen: true , tagTitle: "Download Now..." , tagColor: "green"},

  },
  {

    desc:"hello world my name is alok .",
    filesize:".9mb",
    close:true,
    tag: { isOpen: true , tagTitle: "Download Now..." , tagColor: "blue"},

  },
];



  return (
    <div ref={ref} className="fixed z-[3] w-full h-full flex flex-wrap p-5 gap-5 ">

      {data.map((item,index) => (
        <Card data={item} refrence={ref} />
      ))

      }


    </div>
  )
}

export default Foreground


