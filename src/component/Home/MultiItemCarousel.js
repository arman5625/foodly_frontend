import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {topMeal} from './topmeal';
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false,
      };

    return (
    <div> 
        <Slider {...settings}>
            {topMeal.map((item)=> (
                <CarouselItem image={item.image} title={item.title} key={item.key}/>
            ))}
        </Slider>
    </div>
    )

}

export default MultiItemCarousel;