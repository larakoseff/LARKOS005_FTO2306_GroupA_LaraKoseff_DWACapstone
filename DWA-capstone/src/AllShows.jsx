import React, { useState, useEffect } from 'react';
import './App.css'

export default function AllShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching podcast shows:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <h2>All Shows & Genres</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <h3 className="card--title">{show.title}</h3>
            {show.image && <img src={show.image} alt={show.title} className="card--image" />}
            <p>{show.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}