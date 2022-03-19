import React, { Component } from "react";
import Slider from "react-slick";
import Slide1 from '../img/slide1.jpg';
import Slide2 from '../img/slide2.jpg';
import Slide3 from '../img/slide3.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <img src={Slide1} alt="slide 1" />
          </div>

          <div className="slide">
            <img src={Slide2} alt="slide 2" />
          </div>

          <div className="slide">
            <img src={Slide3} alt="slide 3" />
          </div>

        </Slider>
      </div>
    );
  }
}