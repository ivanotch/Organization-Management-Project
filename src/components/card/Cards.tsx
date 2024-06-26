"use client"
import React from 'react'
import CardUi from './CardUi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cards = ({data, user}: {data: any, user: any}) => {

  
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
            return <CardUi key={index} user={user} item={item}/>
          })}
        </Slider>
    </div>
  )
}

export default Cards;