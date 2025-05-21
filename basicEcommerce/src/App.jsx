import React from 'react'
import Home from './components/Home'
import Create from './components/Create'
import Nav from './components/Nav'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Edit from './components/Edit'

const App = () => {

  const {search ,pathname } = useLocation();

  return (
    <div className='w-screen h-screen flex'>

      {(pathname != "/" || search.length > 0) &&
        (
          <Link to="/" className='absolute border p-2 border-red-400 left-[20%] top-[4%] text-red-400'>Home</Link>
        )}

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path='/detail/:id' element={<Details />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  )
}

export default App