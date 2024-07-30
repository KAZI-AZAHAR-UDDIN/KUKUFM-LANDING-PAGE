// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css';

const Carousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <div key={index} className="carousel-slide">
                    <img src={item.icon} alt={item.title} className="carousel-image" />
                    <div className="carousel-caption" style={{ color: item.text_color }}>
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
