import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';
import slide1 from '@/images/home/shoes-slider1_900x-removebg-preview.png'
import slide2 from '@/images/home/shoes-slider2_900x-removebg-preview.png'
import slide3 from '@/images/home/shoes-slider3_900x-removebg-preview.png'
import slide4 from '@/images/home/shoes-slider4_900x-removebg-preview.png'
import { useSelector } from 'react-redux';


const SlickSlider = ({ products }) => {
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
                breakpoint: 819,
                settings: {
                    variableWidth: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: "linear"
                }
            }
        ]
    };
    const slides = products?.filter((item) => item.category === "women's clothing")
    
    const selectedLanguage = useSelector((state) => state.language.lang);
    const languages = useSelector((state) => state.language.languages);
    const slider = languages[selectedLanguage].home.slider;
    return (
        <div className='slickSlider pt-5 pb-12'>
            <Slider {...settings}>
                <Slide ImgUrl={slide3} price={99.99} title={slider[0]}/>
                <Slide ImgUrl={slide2} price={53.99} title={slider[1]}/>
                <Slide ImgUrl={slide1} price={69.99} title={slider[2]}/>
                <Slide ImgUrl={slide4} price={19.99} title={slider[3]}/>
            </Slider>
        </div>
    )
}

export default SlickSlider