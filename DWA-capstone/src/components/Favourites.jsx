import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";


const FavoriteEpisodesList = ({ favoriteEpisodes }) => {
  const [shows, setShows] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching podcast shows:", error);
      }
    };

    fetchData();
  }, [favoriteEpisodes]); 

  const handleSort = (type) => {
    setSortType(type);
  };

  const handleFilter = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleClearFilters = () => {
    setFilterTitle("");
    setSortType("");
  };

  const getShowInfo = (showID) => {
    const show = shows.find((s) => String(s.id) === String(showID));
    return show
      ? { image: show.image, title: show.title, updated: show.updated }
      : { title: "Unknown Show", image: "default-image-url", updated: "N/A" };
  };

  const filteredAndSortedEpisodes = favoriteEpisodes
    .filter((episode) =>
      getShowInfo(episode.showID).title.toLowerCase().includes(filterTitle.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(getShowInfo(a.showID).updated);
      const dateB = new Date(getShowInfo(b.showID).updated);

      if (sortType === "title-asc") {
        return getShowInfo(a.showID).title.localeCompare(getShowInfo(b.showID).title);
      }
      if (sortType === "title-desc") {
        return getShowInfo(b.showID).title.localeCompare(getShowInfo(a.showID).title);
      }
      if (sortType === "date-asc") {
        return dateA - dateB;
      }
      if (sortType === "date-desc") {
        return dateB - dateA;
      }
      return 0;
    });

  return (
    <div>
<Box>

      <div className="section--heading">
      <p >Favorite Episodes</p>
      </div>
      <br />

      <div className="filter">
        <div>
          <label className="filter--label">
            Filter by Title:{" "}
            <input type="text" value={filterTitle} onChange={handleFilter} />
          </label>
        </div>
        <br />
        <Divider sx={{ borderColor: "white", borderWidth: "0.9px", my: 2 }} />
        <br />
        <div>
          <label className="filter--label">
            Sort Alphabetically:{" "}
            <select
              value={sortType || ""}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Select</option>
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
            </select>
          </label>
        </div>
        <br />
        <Divider sx={{ borderColor: "white", borderWidth: "0.9px", my: 2 }} />
        <br />
        <div>
          <label className="filter--label">
            Sort by date updated:{" "}
            <select
              value={sortType || ""}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Select</option>
              <option value="date-asc">Date Ascending</option>
              <option value="date-desc">Date Descending</option>
            </select>
          </label>
        </div>
        <br />
        <Divider sx={{ borderColor: "white", borderWidth: "0.9px", my: 2 }} />
        <br />
        <button className="explore--button" onClick={handleClearFilters}>
        Clear Filters
      </button>
      <br />
      <br />
 </div>

 <ul className="no-list-style">
        {Array.isArray(filteredAndSortedEpisodes) && filteredAndSortedEpisodes.length > 0 ? (
          filteredAndSortedEpisodes.map((episode) => {
            const { title, image, updated } = getShowInfo(episode.showID);
            const { season, episodeId, timestamp } = episode;

            return (
              <li className="fav--episodes" key={`${episodeId}-${episode.showID}-${season}`}>
                {image && (
                  <img className="fav--image" src={image}/>
                )}

                <p>
                  Show: {title}, Season: {season}, Episode: {episodeId}, Last updated: {new Date(updated).toLocaleString()}, Added on: {new Date(timestamp).toLocaleString()}
                </p>

                <audio controls src="https://podcast-api.netlify.app/placeholder-audio.mp3">
                  Your browser does not support the <code>audio</code> element.
                </audio>
                
              </li>
            );
          })
        ) : (
          <p>No favorite episodes</p>
        )}
      </ul>
      <br />
      </Box>
    </div>
  );
};

export default FavoriteEpisodesList;