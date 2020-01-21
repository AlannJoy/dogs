import React from "react";
// import SelectList from "./components/SelectList";
import Feed from "./components/Feed";
// import "./App.css";
// import from "./components/Feed";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breed: "",
      age: 6
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Dog match</h1>
        <p>Breed: {this.state.breed}</p>
        <p>Age: {this.state.age}</p>
        <button
          onClick={() => {
            // console.log("pick up breed");
            this.setState({ breed: "mil leches" });
          }}
        >
          Pick a breed
          <Feed />
          {/* <SelectList /> */}
        </button>
      </div>
    );
  }
}

export default App;
