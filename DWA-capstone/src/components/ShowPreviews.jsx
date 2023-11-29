import * as React from "react";
import { Button } from "semantic-ui-react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteEpisodesList from "./Favourites.jsx";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ShowPreviews = ({ show, id }) => {
  const [open, setOpen] = React.useState(false);
  const [showData, setShowData] = React.useState({});
  const [showID, setShowID] = React.useState(id);
  const [showSeason, setShowSeason] = React.useState(1);
  const [favorites, setFavorites] = React.useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const findFavoriteIndex = (episodeId, showID, season) => {
    return favorites.findIndex(
      (fav) =>
        fav.episodeId === episodeId &&
        fav.showID === showID &&
        fav.season === season
    );
  };

  const isFavorite = (episodeId, showID, season) => {
    const index = findFavoriteIndex(episodeId, showID, season);
    return index !== -1;
  };

  const resetFavorites = () => {
    setFavorites([]);
  };

  const toggleFavorite = (episodeId) => {
    const index = findFavoriteIndex(episodeId, showID, showSeason);
  
    if (index !== -1) {
      setFavorites((prevFavorites) => [
        ...prevFavorites.slice(0, index),
        ...prevFavorites.slice(index + 1),
      ]);
    } else {
      setFavorites((prevFavorites) => [
        ...prevFavorites,
        { episodeId, showID, season: showSeason, timestamp: Date.now() },
      ]);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
    setShowID(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then((data) => setShowData(data));
  }, [id]);

  const currentSeasonData = showData.seasons?.[showSeason - 1] || {};

  const favoriteEpisodes = currentSeasonData.episodes
    ? currentSeasonData.episodes
        .filter((episode) => isFavorite(episode.episode, showID, showSeason))
        .map((episode) => ({
          episodeId: episode.episode,
          showID,
          season: showSeason,
          title: episode.title,
          showTitle: showData.title,
          seasonTitle: currentSeasonData.title,
          file: episode.file,
        }))
    : [];

  return (
    <React.Fragment>
      <Button className="explore--button" onClick={handleClickOpen}>
        Explore
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div>
            {showData.title && (
              <div>
                <h3 className="card--title">{showData.title}</h3>

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
                    className="season--button"
                    onClick={() =>
                      setShowSeason((prevSeason) => Math.max(prevSeason - 1, 1))
                    }
                  >
                    Previous Season
                  </button>{" "}
                  <button
                    className="season--button"
                    onClick={() =>
                      setShowSeason((prevSeason) =>
                        Math.min(prevSeason + 1, showData.seasons.length)
                      )
                    }
                  >
                    Next Season
                  </button>
                </div>
                {currentSeasonData.title && (
                  <div>
                    <h4>{currentSeasonData.title}</h4>
                    {currentSeasonData.episodes && (
                      <div>
                        <h5>Episodes:</h5>
                        <Button
                          className="explore--button"
                          onClick={resetFavorites}
                        >
                          Clear favourites
                        </Button>
                        <ul className="no-list-style">
                          {currentSeasonData.episodes.map((episode, index) => (
                            <li key={index} className="episodes">
                              <p>
                                Episode {episode.episode}: {episode.title}{" "}
                                <img
                                  src={`../images/${
                                    isFavorite(
                                      episode.episode,
                                      showID,
                                      showSeason
                                    )
                                      ? "star-fill.svg"
                                      : "star-empty.svg"
                                  }`}
                                  className="star--empty"
                                  onClick={() =>
                                    toggleFavorite(episode.episode)
                                  }
                                />
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
          </div>
        </DialogContent>
        {favoriteEpisodes.length > 0 && (
          <FavoriteEpisodesList favoriteEpisodes={favoriteEpisodes} />
        )}
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default ShowPreviews;
