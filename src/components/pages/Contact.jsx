import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'
const Contact = () => {
   const form = useRef();

   const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s0nml9g', 'template_uotl1dr', form.current, 'mWxQh7iFJkjkVIWOg')
      .then((result) => {
          console.log(result.text);
          setDone(true)
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
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Enter Your Name' required/>
                <input type="email" name='user_email' className='user' placeholder='Enter Your Email' required/>
                <textarea name="message" id="" cols="30" rows="15" className='user' placeholder='Enter Your Message..' required/>
                <input type="submit" name='user_name' value='Send' className='button' placeholder='Name'/>
                    <span>{done && "Thanks for contacting me! are get back to you"}</span>
                <div className="blur c-blur2" style={{background: 'rgb(101, 44, 151)',left:'27rem', top:'10rem'}}></div>

            </form>
        </div>
    </div>
  )
}

export default Contact