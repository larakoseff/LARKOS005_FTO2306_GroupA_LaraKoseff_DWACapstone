import React, { useState, useEffect } from 'react';
import './index.css'

export default function AllShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        const data = await response.json();
        setShows(data);

        // Introduce a 2-second delay before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching podcast shows:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="card">
      <h2>All Shows & Genres</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="card--solo">
          {shows.map((show) => (
            <li key={show.id}>
              <h3 className="card--title">{show.title}</h3>
              {show.image && <img src={show.image} alt={show.title} className="card--image" />}
              <p>{show.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}