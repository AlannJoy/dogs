import React, { Component } from "react";

export default class LikeCounter extends Component {
  state = {
    numLikes: 0
  };
  render() {
    const { numLikes } = this.state;
    return (
      <div>
        <p>
          This dog has <b>{numLikes}</b> matches!
        </p>
      </div>
    );
  }
}
