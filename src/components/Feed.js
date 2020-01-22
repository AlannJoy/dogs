import React, { Component } from "react";
import BreedButton from "./BreedButton";
import Image from "./Image";
import "./Style/stylesheet.css";

export default class Feed extends Component {
  state = {
    dogs: {}
  };

  render() {
    return (
      <div className="feed">
        <BreedButton />
        <Image src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=767" />
      </div>
    );
  }
}
