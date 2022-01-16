import React from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import ProductCard from '../product-card/ProductCard';



const ProductSlider = props => {
    SwiperCore.use([Autoplay, Navigation])
    return (
        <Swiper
            navigation={true}
            module={[Autoplay]}
            autoplay={{delay: 3000}}
            spaceBetween={props.spaceBetween ? props.spaceBetween : 10}
            slidesPerView={props.slidesPerView ? props.slidesPerView : 3}
            grabCursor={true}
        >
            {
                props.data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <ProductCard 
                            img01={item.image01}
                            img02={item.image02}
                            name={item.title}
                            price={Number(item.price)}
                            slug={item.slug}
                            pathname={item.type}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

ProductSlider.propTypes = {
    data: PropTypes.array.isRequired,
    spaceBetween: PropTypes.number,
    slidesPerView: PropTypes.number,
}

export default ProductSlider
