import React, { useState, useEffect } from "react";
import ShowPreviews from "./ShowPreviews.jsx";
import Divider from "@mui/material/Divider";
import "../index.css";
import Box from "@mui/material/Box";

export default function AllShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("");
  const [genreSort, setGenreSort] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();
        setShows(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching podcast shows:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSort = (type) => {
    if (type.startsWith("genre-")) {
      setGenreSort(type.replace("genre-", ""));
    } else {
      setSortType(type);
    }
  };

  const handleFilter = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleClearFilters = () => {
    setFilterTitle("");
    setSortType("");
    setGenreSort("");
  };

  const filteredAndSortedShows = shows
    .filter((show) =>
      show.title.toLowerCase().includes(filterTitle.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.updated);
      const dateB = new Date(b.updated);

      if (genreSort) {
        const genreA = a.genres && a.genres.includes(parseInt(genreSort, 10));
        const genreB = b.genres && b.genres.includes(parseInt(genreSort, 10));

        if (genreA && !genreB) return -1;
        if (!genreA && genreB) return 1;
        return 0;
      }

      if (sortType === "title-asc") {
        return a.title.localeCompare(b.title);
      }
      if (sortType === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      if (sortType === "date-asc") {
        return dateA - dateB;
      }
      if (sortType === "date-desc") {
        return dateB - dateA;
      }
      return 0;
    });

  const noMatchesMessage = (
    <p style={{ fontStyle: "italic", color: "gray" }}>
      There are no matches for your results. Clear filters and try again.
    </p>
  );

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box>
      <div className="section--heading">
          <p>Search All Shows</p>
          <img src="../images/blocks-white.svg" className="tc--icon" />
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

          <Divider sx={{ borderColor: "white", borderWidth: "0.9px", my: 2,}} />

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
          <div>
            <label className="filter--label">
              Filter by Genre:{" "}
              <select
                value={genreSort || ""}
                onChange={(e) => handleSort(`genre-${e.target.value}`)}
              >
                <option value="">Select</option>
                <option value="1">Personal Growth</option>
                <option value="2">
                  True Crime and Investigative Journalism
                </option>
                <option value="3">History</option>
                <option value="4">Comedy</option>
                <option value="5">Entertainment</option>
                <option value="6">Business</option>
                <option value="7">Fiction</option>
                <option value="8">News</option>
                <option value="9">Kids and Family</option>
              </select>
            </label>
          </div>
          <br />
          <Divider sx={{ borderColor: "white", borderWidth: "0.9px", my: 2 }} />
          <br />
          <div>
            <button className="explore--button" onClick={handleClearFilters}>
              Clear Filters
            </button>
          </div>
          <br />
          <br />
          <br />
          {loading ? (
            <p className="card--title">Loading...</p>
          ) : filteredAndSortedShows.length === 0 ? (
            noMatchesMessage
          ) : (
            <ul className="no-list-style">
              {filteredAndSortedShows.map((show) => (
                <div key={show.id}>
                  <h3 className="card--title">{show.title} </h3>
                  {show.image && (
                    <img
                      src={show.image}
                      className="card--image"
                      alt={show.title}
                    />
                  )}
                  <p className="show--description">{truncateDescription(show.description, 40)}</p>
                  <div className="seasons--updated">Seasons: {show.seasons}</div>
                  <div className="seasons--updated">
                    Last updated: {new Date(show.updated).toLocaleString()}
                  </div>
                  <br />

                  <div className="child">
                    <ShowPreviews key={show.id} id={parseInt(show.id, 10)} />
                  </div>
                  <br />
                </div>
              ))}
            </ul>
          )}
        </div>
      </Box>
    </>
  );
}
