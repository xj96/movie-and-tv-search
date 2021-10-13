import React from "react";
import "./App.css";

import SearchMovie from "./components/SearchMovie";


const App = () => {
  return (
    <div className="container">
      <h1 className="title" id="startShow">
        Movie & TV Search
      </h1>
      <SearchMovie />
    </div>
  );
};

export default App;
