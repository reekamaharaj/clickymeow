import React from "react";
import "./style.css";

function Game(props){
    return ( 
        <div>
            <h1 className="game"> Score: {props.score} </h1>;
            <h1 className="game"> High Score: {props.highScore} </h1>
            <h1 className="game"> Win: {props.win} </h1>
            <h1 className="game"> Lose: {props.lose} </h1>
        </div>
    )
}
export default Game;