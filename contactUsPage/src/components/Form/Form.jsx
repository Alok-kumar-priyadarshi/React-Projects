import React from 'react'
import "./Form.css"
import Btn from '../Btn/Btn'
import { LuMessageSquareText } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import FormInput from '../FormInput/FormInput';

const Form = () => {
  return (
    <div className='container2'>
        <div className='left'>

            <div className='btns'>

                <Btn text="VIA SUPPORT CHAT" icon={<LuMessageSquareText size={25}/>}/>
                <Btn text="VIA CALL" icon={<IoCallSharp size={25}/>}/>
            </div>
                
            <button className='email-btn'>

                <LuMessageSquareText size={35}/>
                <p>VIA EMAIL FORM</p>
                    
            </button>

            <div className='form' >
                    <FormInput label="Name"/>
                    <FormInput label="E-Mail"/>
                    <FormInput label="TEXT"/>


                    
                
            </div>

            <div className='submit'>
                <Btn text="SUBMIT"/>

            </div>




        </div>

        <div className="right">
            <img src="src\assets\contact.svg" alt="" />
        </div>




    </div>
  )
}

export default Form