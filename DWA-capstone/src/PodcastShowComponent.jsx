import React, { useState, useEffect } from 'react';

const PodcastShowComponent = () => {
  const [shows, setShows] = useState([]);
  const targetGenreId = 2; // Replace with the specific genre ID you want to show

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        const data = await response.json();
        
        // Filter shows based on the specified genre ID
        const filteredShows = data.filter((show) =>
          show.genres.includes(targetGenreId)
        );

        setShows(filteredShows);
      } catch (error) {
        console.error('Error fetching podcast shows:', error);
      }
    };

    fetchData();
  }, [targetGenreId]); // Include targetGenreId in the dependency array

  return (
    <div className="card">
      <h2>True Crime and Investigative Journalism</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <h3>{show.title}</h3>
            {show.image && <img src={show.image} className="card--image" alt={show.title} />}
            <p>{show.description}</p>
            <p>Genres: {show.genres.join(', ')}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastShowComponent;