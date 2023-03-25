import React from 'react'
import './style/style.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Portfolios</a></li>
            <li><a href="#">Journey</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </div>
  )
}

export default Navbar