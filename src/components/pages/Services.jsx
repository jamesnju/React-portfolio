import React from 'react';
import './services.css';
import Heart from '../../images/heartemoji.png';
import Glass from '../../images/glasses.png';
import Humble from '../../images/humble.png'
import Card from '../Floating/Card';
import cv from '../../images/certificate-2kghfzu224vz-1698422104.jpg'

function Services() {
  return (
    <div className='services'>
        {/* left */}
        <div className="awasome">
            <span>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Voluptate totam <br/>
            et qui eveniet fuga atque maiores, <br/>iste pariatur repellendus sapiente quia, sequi ab <br/>officiis quod? Sed autem consequuntur ab ut.</span>
            {/* cv download */}
            <a href={cv} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94',top:'20rem', left:'-12rem'}}></div>
        </div>
        {/* right */}
        <div className="cards">
            <div style={{left: '30rem'}}>
                <Card
                    emoji = {Heart}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop"}
                />
            </div>
            <div style={{top:  '12rem' ,left: '10rem'}}>
                <Card
                    emoji = {Glass}
                    heading = {'Developer'}
                    detail = {"Html, Css, Javascript, Reactjs"}
                />
            </div>
            <div style={{top:  '25rem' ,left: '30rem'}}>
                <Card
                    emoji = {Humble}
                    heading = {'Databases'}
                    detail = {"Node, Postgey,Mysql"}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'rgb(101, 44, 151)',left:'14rem', top:'-10rem'}}></div>
        </div>
    </div>
  )
}

export default Services