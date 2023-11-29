import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./index.css";
import AllShows from "./components/AllShows.jsx";
import FavoriteEpisodesList from "./components/Favourites.jsx";
import FavoriteEpisodesPage from "./components/FavouriteEpisodesPage.jsx";
import Home from "./components/Home.jsx";
import { FavoritesProvider } from "./state/FavouritesContext.jsx";

function App() {
  return (
    <>
      <Router>
        <FavoritesProvider>
          <div>
            <Navbar />
            <Routes>
              <Route path="/search" element={<AllShows />} />
              <Route path="/favourites" element={<FavoriteEpisodesPage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </FavoritesProvider>
      </Router>
    </>
  );
}

export default App;
