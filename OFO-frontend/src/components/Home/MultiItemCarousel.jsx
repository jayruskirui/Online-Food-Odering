import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderModule from 'react-slick';
import CarouselItem from './CarouselItem';
import { topMeals } from './topMeals';

const Slider = SliderModule.default ?? SliderModule;


const MultiItemCarousel = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    swipeToSlide: true
  };

  return (
    <div className = 'multi-carousel'>
        <Slider {...settings}>
          {topMeals.map((item) => (
            <CarouselItem image={item.image} title={item.title}/>
            ))}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel