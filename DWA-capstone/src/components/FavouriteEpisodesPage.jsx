/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useFavorites } from "../state/FavouritesContext.jsx";
import FavoriteEpisodesList from "./Favourites.jsx";

const FavoriteEpisodesPage = () => {
  const { favorites } = useFavorites();

  console.log("Favorites in FavoriteEpisodesPage:", favorites);

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          {favorites.length > 0 ? (
            <FavoriteEpisodesList  favoriteEpisodes={favorites} />
          ) : (
            <p className="nofav--title">No favorite episodes</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteEpisodesPage;
