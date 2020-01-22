import React, { Component } from "react";
import BreedButton from "./BreedButton";

export default class Feed extends Component {
  state = {
    dogs: {}
  };

  render() {
    return (
      <div>
        <BreedButton />
        <Image />
      </div>
    );
  }
}
