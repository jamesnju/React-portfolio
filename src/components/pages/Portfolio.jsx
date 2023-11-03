import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../images/sidebar.png'
import Ecommerce from '../../images/ecommerce.png'
import Hoc from '../../images/hoc.png'
import MusicApp from '../../images/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>


    </div>
  )
}

export default Portfolio