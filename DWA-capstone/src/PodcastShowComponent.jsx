import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const PodcastShowComponent = () => {
  const [shows, setShows] = useState([]);
  const targetGenreId = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();

        const filteredShows = data.filter((show) =>
          show.genres.includes(targetGenreId)
        );

        setShows(filteredShows);
      } catch (error) {
        console.error("Error fetching podcast shows:", error);
      }
    };

    fetchData();
  }, [targetGenreId]);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const renderArrows = () => (
    <div className="slider--arrows">
      <div
        className="arrow--prev"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <img
          src="../images/caret-circle-left-purple.svg"
          className="arrow--left"
        />
      </div>
      <div
        className="arrow--next"
        onClick={() => sliderRef.current.slickNext()}
      >
        <img
          src="../images/caret-circle-right-purple.svg"
          className="arrow--right"
        />
      </div>
    </div>
  );

  const sliderRef = React.createRef();

  return (
    <div className="custom-slider-container">
      {renderArrows()}
      <Slider ref={sliderRef} {...settings}>
        {shows.map((show) => (
          <div key={show.id}>
            <h3 className="card--title">{show.title} </h3>
            {show.image && (
              <img src={show.image} className="card--image" alt={show.title} />
            )}
            <p>{truncateDescription(show.description, 40)}</p>
            <button>Explore</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PodcastShowComponent;
