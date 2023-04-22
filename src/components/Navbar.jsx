// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/Navbar.css'
export const Navbar = () => {
  return (
    <div className='NavBar'>
        <div className="logo">
            <img src="../src/assets/logo.png" alt="logo" />
            <img src="../src/assets/font.png" alt="font" />
        </div>
        <div className="nav-items">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact Us</div>
        </div>
    </div>
  )
}


