import React, { Component } from "react";
import LikeCounter from "./LikeCounter";
import Comment from "./Comment";

export default class Image extends Component {
  render() {
    return (
      //DOG IMG FETCHING
      <div>
        <img
          alt="Little doggo"
          className="post-image"
          src={this.props.src}
        ></img>
        <LikeCounter />
        <Comment />
      </div>
    );
  }
}
