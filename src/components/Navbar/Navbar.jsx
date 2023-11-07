import React from 'react'
import './navbar.css'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='wrapper'>
        <div className="left">
            <div className="namelogo">James</div>
            <Toggle/>
        </div>
        <div className="right">
            <div className="list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiece</li>
                    <li>Achivements</li>
                    <li>portfolio</li>
                </ul>
            </div>
        </div>
        <a href="tel: +25700747076"><button className="button navbutton">
            Contact Us
        </button></a>
    </div>
  )
}

export default Navbar