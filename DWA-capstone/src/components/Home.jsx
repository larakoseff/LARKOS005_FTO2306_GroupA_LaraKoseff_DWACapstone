import React from "react";
import { Link } from "react-router-dom";
import TrueCrimeShows from "./TrueCrimeShows.jsx";
import PersonalGrowthShows from "./PersonalGrowthShows.jsx";
import HistoryShows from "./HistoryShows.jsx";
import "../index.css";

export default function Home() {
  return (
    <div>
      <Link to="/">
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
        </div>
      </Link>
    </div>
  );
}
