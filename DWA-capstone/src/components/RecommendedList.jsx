import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowPreviews from "./ShowPreviews.jsx";
import "./CustomArrows.css";
import "../index.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img
        src="../images/caret-circle-right-purple.svg"
        style={{ ...style, height: "4rem" }}
        alt="Next Arrow"
        className={`${className} slider--arrow-next`}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img
        src="../images/caret-circle-left-purple.svg"
        style={{ ...style, display: "block", height: "4rem" }}
        alt="Previous Arrow"
        className={`${className} slider--arrow-prev`}
      />
    </div>
  );
}

const RecommendedList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const targetIds = [8256, 9691, 9664, 6430];
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();

        const filteredShows = data.filter((show) =>
        targetIds.includes(parseInt(show.id, 10))
      );

        setShows(filteredShows);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching podcast shows:", error);
      }
    };

    fetchData();
  }, [] );

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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "60px",


        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="custom-slider-container">
      {loading ? (
        <div className="loading-container">
          <div className="card--title">Loading...</div>
        </div>
      ) : (
        <Slider {...settings}>
          {shows.map((show) => (
            <div key={show.id}>
              <h3 className="card--title">{show.title} </h3>
              {show.image && (
                <img
                  src={show.image}
                  className="card--image"
                  alt={show.title}
                />
              )}
              <p>{truncateDescription(show.description, 40)}</p>
              <div>Seasons: {show.seasons}</div>
              <div>
                Last updated: {new Date(show.updated).toLocaleString()}
              </div>
              <br />

              <div className="child">
                <ShowPreviews key={show.id} id={parseInt(show.id, 10)} />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default RecommendedList;