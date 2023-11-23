import React from "react";
import AllShows from "./AllShows.jsx";
import PodcastShowComponent from "./PodcastShowComponent.jsx";
import Navbar from "./Navbar.jsx";
import PodcastPreview from "./PodcastPreview.jsx";
import CustomizedDialogs from "./ModalExample.jsx";
import Parent from "./components/ChildtoParent/ChildtoParent.jsx";
import './index.css'

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
        <div className="true--crime">
        <p >True crime and Investigative Journalism</p><img src="../images/projects-icon.svg" className="tc--icon" />
        </div>
        <PodcastShowComponent className="show--comp"/>
        {/* <AllShows /> */}
        {/* <PodcastPreview/> */}
        {/* <CustomizedDialogs />
        <Parent /> */}
        
      </div>
    </>
  );
}

export default App;
