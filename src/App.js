import React, { Component } from "react";
import Card from "./components/Card";
import Game from "./components/Game";
import pictures from "./pictures.json";

class App extends Component {
    // Setting this.state.pictures to the pictures json array
    state = {
        pictures,
        clickedCat: [],
        game: 0,
    };

    clickedPic = (id) => {
        let clickedCat = this.state.clickedCat;
        this.setState({
            game: 0,
        });
        clickedCat.push(id);
        console.log("clicked");
    };

    render() {
        return (
            <div className="container">
                <Game />
                <div className="row">
                    {this.state.pictures.map((picture) => (
                        <Card
                            id={picture.id}
                            key={picture.id}
                            name={picture.name}
                            image={picture.image}
                            clickedPic={this.clickedPic}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;

// let clicked = this.state.clicked;
// let score = this.state.score;
// let highScore = this.state.highScore;
// this.setState({ pictures });

// console.log(clicked);
// console.log(score);
// console.log(highScore);

//function to randomize image location after something is clicked.
//state would need to be for images, clicked images, currect score, high score, number of wins and losses, if the game is going or if it needs to be restarted?

//What happens when the image is clicked? Check image status, if clicked then game over, add one to loss.    If not clicked then status of image would change to clicked, and the images need to be shuffled, add one to score when score gets to 12, max score possible, then game is over, plus one to wins.


// Map over this.state.pictures and render a Card component for each picture object