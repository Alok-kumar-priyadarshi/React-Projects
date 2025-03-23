import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10);

  // let counter = 10;
  function addValue (){
    if(counter <20){

      
      counter = counter + 1;
    }

    setCounter(counter)
  }

  function removeValue (){
    if(counter > 0){

      counter = counter -1;
    }

    setCounter(counter)
  }

  return (
    <>

    <h1>the counter is {counter}</h1>

    <button
    onClick={addValue}
    >add value</button>


    <br />
    <br />
    <button
    onClick={removeValue}
    >remove value</button>
      
      
    </>
  )
}

export default App
