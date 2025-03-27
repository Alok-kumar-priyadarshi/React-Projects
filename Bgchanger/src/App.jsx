import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  let [color,setcolor] = useState("olive")



  return (
    <>
      <div className="w-full h-screen duration-200  flex justify-center"
      style={{backgroundColor : color}}

      >

        <div className='bg-slate-300 mx-auto px-2 py-1 rounded-4xl flex flex-wrap  gap-3 shadow-lg font-bold justify-center absolute bottom-14'>

          <div>

            <button onClick={() => setcolor("red")} className="text-white px-4 py-1 rounded-2xl" style = {{backgroundColor: "red"}}  >Red</button>

          </div>
          <div>

            <button onClick={() => setcolor("green")} className="text-white px-4 py-1 rounded-2xl" style = {{backgroundColor: "green"}}  >Green</button>

          </div>
          <div>

            <button onClick={() => setcolor("blue")} className="text-white px-4 py-1 rounded-2xl" style = {{backgroundColor: "blue"}}  >Blue</button>

          </div>
          <div>

            <button onClick={() => setcolor("orange")} className="text-white px-4 py-1 rounded-2xl" style = {{backgroundColor: "orange"}}  >Orange</button>

          </div>
          <div>

            <button onClick={() => setcolor("violet")} className="text-white px-4 py-1 rounded-2xl" style = {{backgroundColor: "violet"}}  >Violet</button>

          </div>
          <div>

            <button onClick={() => setcolor("black")} className="text-white px-4 py-1 rounded-2xl" style = {{backgroundColor: "black"}}  >black</button>

          </div>
          
          
        </div>




      </div>
    </>
  )
}

export default App
