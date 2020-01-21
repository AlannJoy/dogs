import React, { Component } from "react";
export default class Image extends Component {
  render() {
    return (
      <img alt="Waiting.." className="post-image" src={this.props.src}></img>
    );
  }
}
