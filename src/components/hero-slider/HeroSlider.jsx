import React from 'react'

import './hero-slider.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Pagination, Navigation } from 'swiper';

import heroSliderData from '../../assets/fake-data/hero-slider'


const HeroSlider = () => {
    SwiperCore.use([Pagination,Navigation]);

    return (
        <Swiper 
            pagination={{
            "type": "bullets",
            "clickable": true,
            "bulletActiveClass": "swiper-pagination-bullet-active"
            }} 
            navigation={true} 
            className="mySwiper"
            slidesPerView={1}
            autoHeight={true}
        >
            {
                heroSliderData.map((item, i) =>(
                    <SwiperSlide key={i}><img src={item.img} alt="" /></SwiperSlide>
                ))
            }
        </Swiper>
    )
}


export default HeroSlider
