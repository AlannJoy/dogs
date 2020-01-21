import React, { Component } from "react";

export default class LikeCounter extends Component {
  state = {
    numMatches: 0
  };

  addMatch = () => {
    this.setState({
      numMatches: this.state.numMatches + 1
    });
  };

  render() {
    console.log(this.state);

    const { numMatches } = this.state;
    const likeCountText = numMatches && `This dog has ${numMatches} matches!`;
    return (
      <div>
        <button onClick={this.addMatch}>{likeCountText}</button>
      </div>
    );
  }
}
