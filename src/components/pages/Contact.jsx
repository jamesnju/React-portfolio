import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'
const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contactform'>
        <div className="cleft">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
            </div>
            <div className="blur c-blur1" style={{background: '#ABF1FF94', top:'9rem', left:'-10rem'}}></div>
        </div>
        <div className="cright">
            <form action="">
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name="message" id="" cols="30" rows="10" className='user' placeholder='Message'/>
                <input type="submit" name='user_name' value='Send' className='button' placeholder='Name'/>

                <div className="blur c-blur2" style={{background: 'rgb(101, 44, 151)',left:'27rem', top:'10rem'}}></div>

            </form>
        </div>
    </div>
  )
}

export default Contact