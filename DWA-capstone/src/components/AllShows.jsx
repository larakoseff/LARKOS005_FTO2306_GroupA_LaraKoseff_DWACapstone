import React, { useState, useEffect } from "react";
import ShowPreviews from './ShowPreviews.jsx';
import "../index.css";

export default function AllShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewData, setPreviewData] = useState("");

  const childToParent = (childdata) => {
    setPreviewData(childdata);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();
        setShows(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching podcast shows:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="no-list-style">
          {shows.map((show) => (
          <div key={show.id}>
            <h3 className="card--title">{show.title} </h3>
            {show.image && (
              <img src={show.image} className="card--image" alt={show.title} />
            )}
            <p>{truncateDescription(show.description, 40)}</p>
            <div>Seasons: {show.seasons}</div>
            <div>Last updated: {new Date(show.updated).toLocaleString()}</div>
            <br />
              <div className="child">
                <ShowPreviews childToParent={childToParent} key={show.id} id={parseInt(show.id, 10)} />
              </div>
          </div>
        ))}
        </ul>
      )}
    </div>
  );
}
