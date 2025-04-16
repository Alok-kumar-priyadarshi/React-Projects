import React, { useCallback, useEffect, useState,useRef } from 'react'

const App = () => {

  const [length,setLength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);

  const [Password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {

    let pass = "";

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberAllowed) str = str + "0123456789";
    if(charAllowed) str = str + "!#$%&()*+-.<=>?@[]^_{|}~";

    for(let i = 1;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);

      pass = pass + str.charAt(char);

    }

    setPassword(pass);


  },[length,numberAllowed,charAllowed,
    setPassword // abhi pata nahi hai ki kyu setpassword method yaha par de rahe hai 
  ])

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(Password);
    passwordRef.current?.select();
    
  },[Password])
  


  useEffect(() => {
    passwordGenerator();

  },[length,numberAllowed,charAllowed,passwordGenerator])





  return (
    <>

    <div className='max-w-md bg-gray-700 mx-auto rounded-lg my-8 p-4 shadow-md text-gray-300'>

      <h1 className='w-full text-2xl flex justify-center text-white '>Password Genrator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3 '>
        <input type="text"
        value={Password}
        className='outline-none w-full py-1 px-3 
        text-black bg-white'
        placeholder='your password is ....'
        ref={passwordRef}
        readOnly
  
        />

        <button className='bg-blue-800 px-2 
        cursor-pointer text-blue-50 hover:bg-blue-900'
        onClick={copyToClipboard}
        >Copy</button>

      </div>

      <div className='flex text-md gap-x-2'>

        <div className='flex items-centre gap-x-1'>

          <input type="range"
          min={5}
          max={15}
          value = {length}
          className='cursor-pointer' 
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label > Length : {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id="numberinput"
          onChange = {() => {
            setnumberAllowed((e) => !e);
          }}
           />
           <label htmlFor="numberinput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {charAllowed}
          id="charinput"
          onChange = {() => {
            setCharAllowed((e) => !e);
          }}
           />
           <label htmlFor="charinput">character</label>
        </div>

      </div>
    </div>

    







    </>
  )
}

export default App