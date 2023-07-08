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
                    variableWidth: false
                }
            }
        ]
    };
    return (
        <div className='pb-12'>
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