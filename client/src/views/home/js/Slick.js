import React, { Component } from "react";
import Slider from "react-slick";

import style from "../css/Home.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactLogoImage from "../img/react-logo.png";

class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <div className={style.prueba}>color abc</div>
        <Slider {...settings}>
          <div>
            <h3>a</h3>
          </div>
          <div>
            <h3>b</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Home;
