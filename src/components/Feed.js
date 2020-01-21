import React, { Component } from "react";
// import Image from "./Image";
// import List from "./List";
import PruebaFetching from "./PruebaFetching";

export default class Feed extends Component {
  state = {
    dogs: {}
  };

  fetchLabradors = () => {
    console.log("Labrador!");
    // this.setState({
    //   dogs: false
    // });
  };
  render() {
    return (
      <div>
        <PruebaFetching />
        {/* <div className="buttonsContainer">
          <button id="Labrador" onClick={this.fetchLabradors}>
            Labrador
          </button>
        </div>
        <div className="photo-grid"></div> */}
      </div>
    );
  }
}
