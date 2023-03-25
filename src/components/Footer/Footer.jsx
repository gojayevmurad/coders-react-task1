import React from 'react'
import ball from '../../assets/footer/ball-_-.png'
import github from '../../assets/footer/github.png'
import twitter from '../../assets/footer/twitter.png'
import './style/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>Copyright © 2023 All rights reserved.</li>
                <li className='footer--icons'>
                    <img src={github} alt="" />
                    <img src={twitter} alt="" />
                    <img src={ball} alt="" />
                </li>
                <li>
                    Source code available
                </li>
            </ul>
        </div>
    )
}

export default Footer