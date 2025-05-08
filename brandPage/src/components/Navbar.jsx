import React from 'react'
import brand_logo  from "../assets/brand_logo.png";


const Navbar = () => {
  return (
    <div>

<nav className='navbar'>
        <div>
          <img src={brand_logo} alt="" />
          
        </div>

        <ul className='navList'>
          <li className='' href="#">MENU</li>
          <li className='' href="#">LOCATION</li>
          <li className='' href="#">ABOUT US</li>
          <li className='' href="#">CONTACT US</li>
        </ul>

        <button className='btn'>

          Login

        </button>

      </nav>




    </div>
  )
}

export default Navbar