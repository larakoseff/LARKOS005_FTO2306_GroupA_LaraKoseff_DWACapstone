import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import Link from "@material-ui/core/Link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const ReactCustomArrow = () => {
  const sliderRef = useRef(null);

  const renderArrows = () => (
    <div className="slider-arrow">
      <ButtonBase
        className="arrow-btn prev"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ArrowLeft />
      </ButtonBase>
      <ButtonBase
        className="arrow-btn next"
        onClick={() => sliderRef.current.slickNext()}
      >
        <ArrowRight />
      </ButtonBase>
    </div>
  );

  return (
    <div className="App">
      <h1>React-Slick Custom Arrow</h1>
      <h2>
        Use{" "}
        <a href="https://react-slick.neostack.com/docs/example/previous-next-methods">
          Previous and Next methods
        </a>{" "}
        to custom arrow.
      </h2>
      <div style={{ position: "relative", marginTop: "2rem" }}>
        {renderArrows()}
        <Slider
          ref={sliderRef}
          dots={true}
          arrows={false}
          centerMode={true}
          slidesToShow={2}
        >
          <Link href="/s">
            <img src="http://placekitten.com/g/400/200" alt="cat" />
          </Link>
          <Link href="/s">
            <img src="http://placekitten.com/400/200" alt="cat" />
          </Link>
          <Link href="/s">
            <img src="http://placekitten.com/g/400/200" alt="cat" />
          </Link>
          <Link href="/s">
            <img src="http://placekitten.com/400/200" alt="cat" />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

