import React, { useState, useEffect } from 'react';

const SpecificPodcastShow = ({ showId }) => {
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${showId}`);
        
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch show data (status ${response.status}): ${errorMessage}`);
        }

        const data = await response.json();
        setShow(data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching show data.');
      }
    };

    fetchShowData();
  }, [showId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!show) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      {show.image && <img src={show.image} alt={show.title} />}
      <p>{show.description}</p>
      <p>Seasons: {show.seasons}</p>
      <p>Genres: {show.genres ? show.genres.join(', ') : 'N/A'}</p>
      <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>

      {/* Rendering episodes */}
      {show.episodes && (
        <div>
          <h3>Episodes</h3>
          {Array.isArray(show.episodes) ? (
            <ul>
              {show.episodes.map((episode) => (
                <li key={episode.id}>{episode.title}</li>
              ))}
            </ul>
          ) : (
            <p>{show.episodes.title}</p>
          )}
        </div>
      )}
      {/* Add more details as needed */}
    </div>
  );
};

export default SpecificPodcastShow;