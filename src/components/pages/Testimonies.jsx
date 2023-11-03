import React from 'react'
import './testimonies.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import pro1 from '../../images/profile1.jpg'
import pro2 from '../../images/profile2.jpg'
import pro3 from '../../images/profile3.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonies = () => {
    const clients = [
        {
            img: pro1,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime, iste neque unde eaque dicta ratione, consequuntur nisi commodi alias magni tempora eum quidem vel placeat laudantium, deleniti architecto quia.",
            name: 'james'
        },
        {
            img: pro2,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime, iste neque unde eaque dicta ratione, consequuntur nisi commodi alias magni tempora eum quidem vel placeat laudantium, deleniti architecto quia.",
            name: 'james'
        },
        {
            img: pro3,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime, iste neque unde eaque dicta ratione, consequuntur nisi commodi alias magni tempora eum quidem vel placeat laudantium, deleniti architecto quia.",
            name: 'james'
        },
    ]
  return (
    <div className='testimonywrapper'>
        <div className="heading">
            <span>Client always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>

            <div className="blur t-blur1" style={{background: 'skyblue',top:'20rem', left:'-12rem'}}></div>
            <div className="blur t-blur2" style={{background: 'rgb(101, 44, 151)',left:'14rem', top:'-10rem'}}></div>
            <Swiper
            spaceBetween={20}
            slidesPerView={2}
            grabCursor={ true}
            // modules={[Pagination]}
            // slidesPerView={1}
            // pagination={{clickable: true}}
            >
                {clients.map((client, index) =>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonies