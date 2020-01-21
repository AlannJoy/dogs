import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/Feed";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <h1>DogMatch!</h1>
      <Feed></Feed>
    </div>
  );
}

export default App;
