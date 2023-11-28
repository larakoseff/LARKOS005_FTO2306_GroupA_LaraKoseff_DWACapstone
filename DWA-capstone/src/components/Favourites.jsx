import React from "react";

const FavoriteEpisodesList = ({ favoriteEpisodes }) => {
  return (
    <div className="fav--episodes">
      <h2>Favorite Episodes</h2>
      <ul className="no-list-style">
      {Array.isArray(favoriteEpisodes) && favoriteEpisodes.length > 0 ? (
  favoriteEpisodes.map((episode) => (
    <li key={`${episode.episodeId}-${episode.showID}-${episode.season}`}>
              <p>
                Show: {episode.showTitle}, Season: {episode.seasonTitle}, Episode:{" "}
                {episode.episode}: {episode.title}
              </p>
              {episode.file && (
                <audio controls>
                  <source src={episode.file} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </li>
          ))
        ) : (
          <p>No favorite episodes</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteEpisodesList;