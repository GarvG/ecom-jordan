import React from 'react'
import logo from "../Images/logo.jpg"
import "../styles/Navbar.css"
const Navbar = () => {
  return (
  <nav> 
      <div className="wrapper">
          <div className="left">
                <img className="logo"src={logo}></img>
          </div>
          <div className="center">

              <input placeholder='Search'></input>
          </div>
          <div className="right">
              <ul className="right-navbar">
                  <li className="Icons">Home </li>
                  <li className="Icons">Products</li>
                  <li className="Icons"><span className='ShoppingCart'> Cart<span className="CartCount">0</span></span></li>
                  <li className="Icons">Sign In</li>
              </ul>
          </div>

      </div>
      
      </nav>
  )
}

export default Navbar