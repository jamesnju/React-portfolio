import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='wrapper'>
        <div className="left">
            <div className="namelogo">James</div>
            <span>toggle</span>
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
        <button className="button navbutton">
            Contact Us
        </button>
    </div>
  )
}

export default Navbar