import React from 'react'
import './footer.css'
import wave from '../../images/wave.png';
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Mail from "@iconscout/react-unicons/icons/uil-mailbox-alt"
import Youtube from "@iconscout/react-unicons/icons/uil-youtube"

const Footer = () => {
  return (
    <div className='footer'  style={{marginTop:"5rem"}}>
        <img src={wave} style={{width: '100%'}} alt="" />
        <div className="fcontent">
            <a href="mailto:james500nju@gmail.com" style={{textDecoration: 'none', fontSize:'23px'}}><span>james500nju@gmail.com</span></a>
            <div className="ficons">
                <a href="/"><Insta color='white' size='3rem'/></a>
                <a href="https://youtube.com/@404hub?si=xYqqa46jgzgruD_C"><Youtube color='white' size='3rem'/></a>
                <a href="/"><Facebook color='white' size='3rem'/></a>
                <a href="https://github.com/jamesnju"><Github color='white' size='3rem'/></a>
                <a href="mailto:james500nju@gmail.com"><Mail color='white' size='3rem'/></a>
            </div>
        </div>

    </div>
  )
}

export default Footer