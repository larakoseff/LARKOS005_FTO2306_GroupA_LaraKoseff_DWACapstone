import React from "react";
import AllShows from "./AllShows.jsx";
import PodcastShowComponent from "./PodcastShowComponent.jsx";
import Navbar from "./Navbar.jsx";
import './index.css'

function App() {
  // const cards = data.map((item) => {
  //   return (<AllShows key={item.id} {...item} />)
  // });

  return (
    <>
      <Navbar />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="true--crime">
        <p >True crime and Investigative Journalism</p><img src="../images/projects-icon.svg" className="tc--icon" />
        </div>
        <PodcastShowComponent className="show--comp"/>
        <AllShows />
      </div>
    </>
  );
}

export default App;
