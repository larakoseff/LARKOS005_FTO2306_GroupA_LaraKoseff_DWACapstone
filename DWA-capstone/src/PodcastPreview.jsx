import React from "react";
import "./index.css";

export default function PodcastPreview() {
  const [showData, setShowData] = React.useState({});
  const [showID, setShowID] = React.useState(5675);
  const [showSeason, setShowSeason] = React.useState(1);

  React.useEffect(
    function () {
      fetch(`https://podcast-api.netlify.app/id/${showID}`)
        .then((res) => res.json())
        .then((data) => setShowData(data));
    },
    [showID]
  );

  const currentSeasonData = showData.seasons?.[showSeason - 1] || {};

  return (
    <div className="season--dialog">
      {showData.title && (
        <div>
          <h3>{showData.title}</h3>

          {showData.image && (
            <img
              src={showData.image}
              alt={showData.title}
              className="card--image"
            />
          )}

          <p>{showData.description}</p>

          <div>
            <button
              onClick={() =>
                setShowSeason((prevSeason) => Math.max(prevSeason - 1, 1))
              }
            >
              Previous Season
            </button>
            <button
              onClick={() =>
                setShowSeason((prevSeason) =>
                  Math.min(prevSeason + 1, showData.seasons.length)
                )
              }
            >
              Next Season
            </button>
          </div>

          {/* <h2>Season {showSeason}</h2> */}
          {currentSeasonData.title && (
            <div>
              <h4>{currentSeasonData.title}</h4>
              {/* {currentSeasonData.image && (
                <img
                  src={currentSeasonData.image}
                  alt={currentSeasonData.title}
                  className="card--image"
                />
              )} */}
              {currentSeasonData.episodes && (
                <div>
                  <h5>Episodes:</h5>
                  <ul>
                    {currentSeasonData.episodes.map((episode, index) => (
                      <li key={index}>
                        <p>
                          Episode {episode.episode}: {episode.title}
                        </p>
                        {episode.file && (
                          <audio
                            controls
                            src="https://podcast-api.netlify.app/placeholder-audio.mp3"
                          >
                            Your browser does not support the
                            <code>audio</code> element.
                          </audio>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

      
        </div>
      )}

      {/* <pre>{JSON.stringify(showData, null, 2)}</pre> */}
    </div>
  );
}
