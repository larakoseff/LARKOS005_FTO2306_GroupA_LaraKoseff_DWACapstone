import React from "react";
import { Link } from "react-router-dom";
import TrueCrimeShows from "./TrueCrimeShows.jsx";
import PersonalGrowthShows from "./PersonalGrowthShows.jsx";
import HistoryShows from "./HistoryShows.jsx";
import RecommendedList from "./RecommendedList.jsx";
import "../index.css";

export default function Home() {
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="section--heading">
          <p>What We're Loving</p>
          <img src="../images/box-white.svg" className="tc--icon" />
        </div>
        <RecommendedList />
        <div className="section--heading">
          <p>Personal Growth</p>
          <img src="../images/face-white.svg" className="tc--icon" />
        </div>
        <PersonalGrowthShows />
        <div className="section--heading">
          <p>True crime and Investigative Journalism</p>
          <img src="../images/blocks-white.svg" className="tc--icon" />
        </div>
        <TrueCrimeShows />
        <div className="section--heading ">
          <p>History</p>
          <img src="../images/bird-white.svg" className="tc--icon" />
        </div>
        <HistoryShows />
      </div>
    </div>
  );
}
