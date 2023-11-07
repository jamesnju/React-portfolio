import React from 'react'
import './works.css'
import Facebook from '../../images/Facebook.png'
import Fiverr from '../../images/fiverr.png'
import Amazon from '../../images/amazon.png'
import Shopfy from '../../images/Shopify.png'
import Upwork from '../../images/Upwork.png'
import { motion } from 'framer-motion'
const Works = () => {
  return (
    <div className='work'>
         {/* left */}
          <div className="awasome">
            <span>All My works</span>
            <span> and Project</span>
            <span>
            I take pride in my work as a frontend developer, <br/>
            where I've had the privilege of contributing to<br/> various projects
            during my years study.My portfolio showcases my <br/>
            work in various projects and demonstrations of my<br/> ability to adapt to different project requirements.
            </span>
            {/* cv download */}
                <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: '#ABF1FF94',top:'20rem', left:'-12rem'}}></div>
        </div>
        <div className="wright">
          <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin: '-40px'}}
          transition={{duration: 3, type: 'spring'}}
          className="wmaincircle">
            <div className="wsecCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="wsecCircle">
              <img src={Shopfy} alt="" />
            </div>
            <div className="wsecCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="wsecCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="wsecCircle">
              <img src={Facebook} alt="" />
            </div>
            {/* background Circle */}
            <div className="w-blackCircle blueCircle"></div>
            <div className="w-blackCircle yellowCircle"></div>
          </motion.div>
        </div>
    </div>
  )
}

export default Works