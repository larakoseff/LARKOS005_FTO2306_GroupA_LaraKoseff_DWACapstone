import React, { useState, useEffect } from "react";
import "./App.css";
import AllShows from "./AllShows.jsx";
import PodcastShowComponent from "./PodcastShowComponent.jsx";

function App() {
  // const cards = data.map((item) => {
  //   return (<AllShows key={item.id} {...item} />)
  // });

  return (
    <>
<PodcastShowComponent/>
<AllShows />

    </>
  );
}

export default App;
