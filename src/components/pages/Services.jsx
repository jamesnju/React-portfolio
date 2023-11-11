import React from 'react';
import './services.css';
import Heart from '../../images/heartemoji.png';
import Glass from '../../images/glasses.png';
import Humble from '../../images/humble.png'
import Card from '../Floating/Card';
import cv from '../../images/certificate-2kghfzu224vz-1698422104.jpg'
import { motion } from 'framer-motion';

function Services() {
    const transition = {duration : 3, type: 'spring'}
  return (
    <div className='services'>
        {/* left */}
        <div className="awasome">
            <span>My Awesome</span>
            <span>services</span>
            <span>
            I develop tailored web<br/> 
            solutions using HTML, <br/>
            CSS,PHP,REACTJS <br/>
            frameswork and JavaScript<br/>
            to meet your specific<br/> 
            requirements.I design and<br/>
            implement intuitive<br/>
            user interfaces,enhancing user<br/>
            engagement and interaction.
            </span>
            {/* cv download */}
            <a href={cv} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94',top:'20rem', left:'-12rem'}}></div>
        </div>
        {/* right */}
        <div className="cards">
            <motion.div
            initial={{left: '25%'}}
            whileInView={{left:'11rem'}}
            transition={transition}
            style={{left: '30rem'}}>
                <Card
                    emoji = {Heart}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop"}
                />
            </motion.div>
            <motion.div 
            initial={{left: '5%'}}
            whileInView={{left: '2rem'}}
            transition={transition}
            style={{top:  '12rem' ,left: '6rem'}}>
                <Card
                    emoji = {Glass}
                    heading = {'Developer'}
                    detail = {"Html, Css, Javascript, Reactjs"}
                />
            </motion.div>
            <motion.div 
            initial={{left:'50%'}}
            whileInView={{left:'12rem'}}
            transition={transition}

            style={{top:  '25rem' ,left: '30rem'}}>
                <Card
                    emoji = {Humble}
                    heading = {'Databases'}
                    detail = {"Node, Postgey,Mysql"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'rgb(101, 44, 151)',left:'14rem', top:'-10rem'}}></div>
        </div>
    </div>
  )
}

export default Services