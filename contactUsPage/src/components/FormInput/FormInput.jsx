import React from 'react'
import "./FormInput.css"

const FormInput = ({label}) => {
  return (
    <div className='form-controller'>

        <label htmlFor={{label}}>{label}</label>
        <input type="text" name={{label}} />


    </div>
  )
}

export default FormInput