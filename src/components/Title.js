import React, { Component } from "react";
import "./Style/stylesheet.css";

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>Dog Match!</h1>
        <h2>Thousands of happy dogs are waiting for you</h2>
      </div>
    );
  }
}
