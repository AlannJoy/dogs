import React from "react";

class PruebaFetching extends React.Component {
  constructor() {
    this.state = {
      breed: "Labrador",
      age: 6
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Dog match</h1>
      </div>
    );
  }
}

export default App;
