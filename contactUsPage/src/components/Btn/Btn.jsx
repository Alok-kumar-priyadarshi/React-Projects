import React from 'react'
import "./btn.css"
import { LuMessageSquareText } from "react-icons/lu";

const Btn = ({text , icon}) => {
  return (
    <div>

        <button className='btn'>

            {icon} 
            <p>{text}</p>

        </button>




    </div>
  )
}

export default Btn