import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import MenuIcon from '@mui/icons-material/Menu';
import './style/style.css'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)



  function changeMenu() {
    setIsActive(!isActive)
  }


  return (
    <div className='navbar'>
      <div className={isActive ? 'active hamburger' : 'hamburger'} onClick={() => changeMenu()}>
      </div>
      <ul className={isActive ? 'active' : ''}>
        <li onClick={() => setIsActive(false)}><NavLink to="/">Home</NavLink></li>
        <li onClick={() => setIsActive(false)}><NavLink to="/about">About</NavLink></li>
        <li onClick={() => setIsActive(false)}><NavLink to="/contact">Contact</NavLink></li>
        <li onClick={() => setIsActive(false)}><NavLink to="/portfolios">Portfolios</NavLink></li>
        <li onClick={() => setIsActive(false)}><NavLink to="/journey">Journey</NavLink></li>
        <li onClick={() => setIsActive(false)}><NavLink to="/blog">Blog</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar