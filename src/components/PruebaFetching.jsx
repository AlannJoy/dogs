import React, { Component } from "react";
class VideogameDisplay extends Component {
  state = {
    game: {}, //Dogs should be an array of dogObjects but first it's gonna be an empty object as the example
    loading: true //At the beginning we aint using loading, I see it as an extra
  };
  fetchBreed = async () => {
    //this is going to be fetchBreed = () =>{}
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const parsedData = await response.json();
    const gameData = parsedData.results[0]; //Gotta check how data is displayed from the api
    this.setState({
      loading: false,
      game: {
        name: gameData.name,
        images: gameData.short_screenshots.map(imageObj => imageObj.image)
      }
    });
  };
  render() {
    console.log(this.state.game);
    const { game } = this.state;
    const imageList =
      game.images &&
      game.images.map(imageUrl => <img src={imageUrl} alt={"a"} />);
    return (
      <div>
        <div>
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <h1>{this.state.game.name}</h1>
              {imageList}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default VideogameDisplay;
