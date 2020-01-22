import React, { Component } from "react";
import LikeCounter from "./LikeCounter";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <h1>Wanna add a comment?</h1>
        <h2>Name:</h2>
        <p>Comment:</p>
        <LikeCounter />
      </div>
    );
  }
}
