import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
const Carousel = ({ items }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };
  // console.log(items.slice(0, 10));
  return (
    <div className="slider-container">
      <p>Top</p>

      <Slider {...settings}>
        {items?.data.slice(0, 5).map((anime) => (
          <div style={{ position: "relative" }}>
            <img src={anime.trailer.images.large_image_url} alt="" />
            <h3 style={{ position: "absolute", bottom: "0px" }}>FORTH SLIDE</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
