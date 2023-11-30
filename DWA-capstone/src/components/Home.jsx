import React from "react";
import TrueCrimeShows from "./TrueCrimeShows.jsx";
import PersonalGrowthShows from "./PersonalGrowthShows.jsx";
import HistoryShows from "./HistoryShows.jsx";
import RecommendedList from "./RecommendedList.jsx";
import Entertainment from "./Entertainment.jsx";
import Fiction from "./Fiction.jsx";
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
          <p>True Crime and Investigative Journalism</p>
          <img src="../images/blocks-white.svg" className="tc--icon" />
        </div>
        <TrueCrimeShows />
        <div className="section--heading ">
          <p>History</p>
          <img src="../images/bird-white.svg" className="tc--icon" />
        </div>
        <HistoryShows />
        <div className="section--heading ">
          <p>Entertainment</p>
          <img src="../images/squiggle-icon.svg" className="tc--icon" />
        </div>
        <Entertainment />
        <div className="section--heading ">
          <p>Fiction</p>
          <img src="../images/pod-white.svg" className="tc--icon" />
        </div>
        <Fiction />
      </div>
    </div>
  );
}
