import React from "react";

export default class List extends React.Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  };
  render() {
    const { animalsByAwesomeness } = this.state;
    const listItems = animalsByAwesomeness.map(animal => <li>{animal}</li>);
    return <ul>{listItems}</ul>;
  }
}
