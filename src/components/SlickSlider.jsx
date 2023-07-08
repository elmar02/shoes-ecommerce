import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';


const SlickSlider = () => {
    let settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    variableWidth: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: "linear"
                }
            }
        ]
    };
    return (
        <div className='slickSlider pb-12'>
            <Slider {...settings}>
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
            </Slider>
        </div>
    )
}

export default SlickSlider