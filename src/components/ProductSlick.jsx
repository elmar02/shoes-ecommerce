import React from 'react'
import Item from './Item'
import Slider from 'react-slick';

const ProductSlick = ({products}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        spacing: 30,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return (
        <div className='productSlick'>
            <Slider {...settings}>
                {products?.map((item,index)=>(
                    <Item key={index} product={item}/>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlick