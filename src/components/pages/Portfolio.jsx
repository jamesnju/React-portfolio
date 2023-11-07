import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Magazine from '../../images/magazine.png'
import SummarizerApi from '../../images/summerizer.png'
import Movieshop from '../../images/htmlmovieshop.png'
import Ecommerce from '../../images/ecommerce.png'
import TodoApp from '../../images/todo.png'
import MusicApp from '../../images/musicapp.png'
import ceri from '../../images/New folder/certificate-2kghfzu224vz-1698422104.jpg'
import badge from '../../images/New folder/Postman - Postman API Fundamentals Student Expert - 2023-10-26.png'
import freecode from '../../images/New folder/freecodecert.png';

import 'swiper/css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
            spaceBetween={20}
            slidesPerView={2}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://ai-text-summarizer-app-starter-template--error404james.repl.co/"><img src={SummarizerApi} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://jamesnju.github.io/magazine/"><img src={Magazine} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://jamesnju.github.io/Moviewebsite/"><img src={Movieshop} alt=""/></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://jamesnju.github.io/todoapp/"><img src={TodoApp} alt=""/></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>

        <span style={{marginTop:"5rem"}}>Certificates And Badges</span>
        <span>Acquired in various Projects</span>
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={ceri} alt="" height={''}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={badge} alt="" height={'80%'} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={freecode} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://jamesnju.github.io/magazine/"><img src={Movieshop} alt=""/></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://jamesnju.github.io/todoapp/"><img src={TodoApp} alt=""/></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>




    </div>
  )
}

export default Portfolio