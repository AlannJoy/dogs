import React, { Component } from "react";
import LikeCounter from "./LikeCounter";
import Comment from "./Comment";
import "./Style/stylesheet.css";

export default class Image extends Component {
  render() {
    return (
      //DOG IMG FETCHING
      <div className="dog-img">
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
