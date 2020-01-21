import React, { Component } from "react";
import LikeCounter from "./LikeCounter";
export default class Image extends Component {
  render() {
    return (
      <div>
        <img alt="Waiting.." className="post-image" src={this.props.src}></img>
        <LikeCounter />
      </div>
    );
  }
}
