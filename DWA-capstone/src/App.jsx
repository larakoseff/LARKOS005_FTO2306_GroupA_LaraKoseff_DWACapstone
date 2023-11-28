import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./index.css";
import AllShows from "./components/AllShows.jsx";
import FavoriteEpisodesList from "./components/Favourites.jsx";
import Home from "./components/Home.jsx"

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/search" element={<AllShows />} />
            <Route path="/favourites" element={<FavoriteEpisodesList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
