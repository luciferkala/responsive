import React from "react";
import bg_1 from "./image/1.jpg";
import bg_2 from "./image/2.jpg";
import bg_3 from "./image/3.jpg";

function MyCarousel(props) {
  return (
    <div
      id="carousel"
      data-anchor="sectionCarousel"
      className="section active fp-responsive"
    >
      <div className="slide">
        <img src={bg_1} width="100%" height="100%" />
      </div>
      <div className="slide">
        <img src={bg_2} width="100%" height="100%" />
      </div>
      <div className="slide">
        <img src={bg_3} width="100%" height="100%" />
      </div>
    </div>
  );
}

export default MyCarousel;
