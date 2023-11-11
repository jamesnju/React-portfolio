import React from 'react';
import './intro.css';
import Github from '../icons/github.png';
import LinkInd from '../icons/heart.png';
import Insta from '../icons/instar.png';
import Victor1 from '../images/Vector1.png'
import Victor2 from '../images/Vector2.png'
import boy from '../images/nae.png'
import crown from '../images/crown.png';
import thumb from '../images/thumbup.png'
import Glassesemogi from '../images/glassesimoji.png'
import FloatingDiv from '../components/Floating/FloatingDiv';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const transition = {duration : 2, type: 'spring'}


function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="introleft">
            <div className="introname">
                <span >Hy! I AM</span> 
                <span style={{color: 'red'}}>JAMES</span>
                <span style={{color: darkMode? 'white': ''}}> a recent graduate in web development with a strong passion
                for creating innovative and user-friendly web experiences. Armed with a fresh perspective and a solid foundation in frontend development, I am eager to apply my knowledge and skills to contribute to exciting projects.
                During my academic journey, I've acquired expertise in web design, coding, and responsive design.
                  </span>
            </div>
            <button className=" button introbutton">Hire me</button>
            <div style={{background: 'white', borderRadius:'20px'}} className="introicon">
                <a href=""><img src={Github} alt="" /></a>
                <a href=""><img src={LinkInd} alt="" /></a>
                <a href=""><img src={Insta} alt="" /> </a>
            </div>
        </div>
        <div className="introright">
            <img src={Victor1} alt="" />
            <img src={Victor2} alt="" />
            <img src={boy} alt="" style={{width: '10rem', borderRadius:'20px'}} />
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left: "-24%"}}
            transition={transition}
            style={{left: '-6rem', top: '-6rem', transform: "scale(0.7)"}} src={Glassesemogi} alt="" />
            <motion.div
            initial={{topn: '-4',left: '-3%'}}
            whileInView={{left: '66%'}}
            transition={transition}
            style={{top: '-4%', left: '63%'}}>
              <FloatingDiv image={crown} text1='Web' text2='Developer'/>
            </motion.div>
            <motion.div
            initial={{left: '9rem', top:'18rem'}}
            whileInView={{left: -68}}
            transition={transition}
            style={{top: "22rem"}}>
              <FloatingDiv image={thumb} text1='Classic Design' text2='Award'/>
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        </div>
        <div className="blur" style={{backgroundColor: '#C1F5FF', top: "33rem", width: '21rem', height:'11rem', left:'30rem'}}></div>
    </div>
  )
}

export default Intro