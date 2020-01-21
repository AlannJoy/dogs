import React, { Component } from "react";

export default class Feed extends Component {
  state = {
    dogs: []
  };

  componentDidMount = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const json = await response.json();
    this.setState({ dogs: Object.keys(json.message) });
  };

  fetchLabradors = () => {
    console.log("Labrador!");
  };
  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.dogs.map(dog => {
          console.log(dog);
          return <button>{dog}</button>;
        })}
      </div>
    );
  }
}
