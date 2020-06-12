import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Game from "./components/Game";
import pictures from "./pictures.json";

class App extends Component {
    // Setting this.state.pictures to the pictures json array
    state = {
        pictures,
        score: 0,
        highScore: 0,
        win: 0,
        lose: 0,
        clicked: []
    };

    clickedPic = id => {
        console.log("clicked");
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
    }

    // Map over this.state.pictures and render a Card component for each picture object
    render() {
        return (
            <Wrapper>
                <Title>Clicky Meow</Title>
                {this.state.pictures.map((picture) => (
                    <Card
                        id={picture.id}
                        key={picture.id}
                        name={picture.name}
                        image={picture.image}
                    />
                ))}
                <Game score={this.state.score} highScore={this.state.highScore} win={this.state.win} lose={this.state.lose}/>
            </Wrapper>
        );
    }
}

export default App;
