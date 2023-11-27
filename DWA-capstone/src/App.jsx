import React from "react";
import Navbar from "./Navbar.jsx";
import "./index.css";
import TrueCrimeShows from "./components/TrueCrimeShows.jsx";
import PersonalGrowthShows from "./components/PersonalGrowthShows.jsx";
import HistoryShows from "./components/HistoryShows.jsx";
import AllShows from "./components/AllShows.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="personal--growth">
          <p>Personal Growth</p>
          <img src="../images/projects-icon.svg" className="tc--icon" />
        </div>
        <PersonalGrowthShows />
        <div className="true--crime">
          <p>True crime and Investigative Journalism</p>
          <img src="../images/projects-icon.svg" className="tc--icon" />
        </div>
        <TrueCrimeShows />
        <div className="history">
          <p>History</p>
          <img src="../images/projects-icon.svg" className="tc--icon" />
        </div>
        <HistoryShows />
        <AllShows />
      </div>
    </>
  );
}

export default App;
