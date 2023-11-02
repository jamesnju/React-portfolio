import React from 'react';
import './intro.css';
import Github from '../icons/github.png';
import LinkInd from '../icons/heart.png';
import Insta from '../icons/instar.png';
import Victor1 from '../images/Vector1.png'
import Victor2 from '../images/Vector2.png'
import boy from '../images/boy.png'
import crown from '../images/crown.png';
import thumb from '../images/thumbup.png'
import Glassesemogi from '../images/glassesimoji.png'
import FloatingDiv from '../components/Floating/FloatingDiv';




function Intro() {
  return (
    <div className='intro'>
        <div className="introleft">
            <div className="introname">
                <span>Hy! I AM</span>
                <span>JAMES</span>
                <span> Frontend developer with high level of experience in
                    web design </span>
            </div>
            <button className=" button introbutton">Hire me</button>
            <div className="introicon">
                <a href=""><img src={Github} alt="" /></a>
                <a href=""><img src={LinkInd} alt="" /></a>
                <a href=""><img src={Insta} alt="" /> </a>
            </div>
        </div>
        <div className="introright">
            <img src={Victor1} alt="" />
            <img src={Victor2} alt="" />
            <img src={boy} alt="" />
            <img style={{left: '-6rem', top: '-6rem', transform: "scale(0.7)"}} src={Glassesemogi} alt="" />
            <div style={{top: '-4%', left: '63%'}}>
              <FloatingDiv image={crown} text1='Web' text2='Developer'/>
            </div>
            <div style={{top: "22rem"}}>
              <FloatingDiv image={thumb} text1='Classic Design' text2='Award'/>
            </div>
            {/* blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        </div>
        <div className="blur" style={{backgroundColor: '#C1F5FF', top: "33rem", width: '21rem', height:'11rem', left:'30rem'}}></div>

    </div>
  )
}

export default Intro