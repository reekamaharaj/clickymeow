import React, { Component } from "react";
import Card from "./components/Card";
import Game from "./components/Game";
import pictures from "./pictures.json";

class App extends Component {
    // Setting this.state.pictures to the pictures json array
    state = {
        pictures,
        clickedCat: [],
        score: 0,
        highScore: 0,
        win: 0,
        lose: 0,
        game: false,
    };

    clickedPic = (id) => {
        let clickedCat = this.state.clickedCat;

        let score = this.state.score;
        let highScore = this.state.highScore;

        let win = this.state.win;
        let lose = this.state.lose;

        this.setState({
            game: true,
        });

        if (clickedCat === undefined || clickedCat.length === 0) {
            clickedCat.push(id);
            this.setState({
                score: score + 1,
                pictures: shuffle(pictures)
            });
            console.log("game started", id);
            //add one to score
            //randomize the images
        } else if (clickedCat.length === 12) {
            this.setState({
                win: win + 1,
                score: 0,
                clickedCat: [],
                pictures: shuffle(pictures)
            });
            //restart game, score set to 0 and clear clicked Cat array
            console.log("win", id);
        } else if (clickedCat.includes(id)) {
            //check if img has been clicked before
            this.setState({
                lose: lose + 1,
                score: 0,
                clickedCat: [],
                pictures: shuffle(pictures)
            });
            if (score > highScore) {
                this.setState({
                    highScore: score,
                });
            }
            console.log("lose", id);
            //restart game, score set to 0 and clear clickedCat array
        } else {
            this.setState({
                score: score + 1,
                pictures: shuffle(pictures)
            });
            clickedCat.push(id);
            console.log("plus 1", id);
            //randomize pictures
        }
    };

    render() {
        return (
            <div className="container">
                <Game
                    score={this.state.score}
                    highScore={this.state.highScore}
                    win={this.state.win}
                    lose={this.state.lose}
                />
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

function shuffle(array) {
    let i;
    let j;
    let temp;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default App;
