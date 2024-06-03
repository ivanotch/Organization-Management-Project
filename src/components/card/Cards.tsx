"use client"
import React from 'react'
import CardUi from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cards = ({data}: {data: any}) => {

  
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: '0',
      slidesToShow: 3,
      speed: 500
    };

  return (

    <div className="slider-container w-[70%]">
        <Slider {...settings}>
          {data.map((item: any, index: number) => {
            return <CardUi key={index} item={item} />
          })}
        </Slider>
    </div>
  )
}

export default Cards;