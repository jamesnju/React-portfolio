import React from 'react'
import './works.css'
import Facebook from '../../images/Facebook.png'
import Fiverr from '../../images/Facebook.png'
import Amazon from '../../images/Facebook.png'
import Shopfy from '../../images/Shopify.png'
import Upwork from '../../images/Upwork.png'

const Works = () => {
  return (
    <div className='work'>
         {/* left */}
         <div className="awasome">
            <span>All My works</span>
            <span>Brands and Clients</span>
            <span>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Voluptate totam <br/>
            et qui eveniet fuga atque maiores, <br/>iste pariatur repellendus sapiente quia, sequi ab <br/>officiis quod? Sed autem consequuntur ab ut.</span>
            {/* cv download */}
                <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: '#ABF1FF94',top:'20rem', left:'-12rem'}}></div>
        </div>

    </div>
  )
}

export default Works