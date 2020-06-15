import React from "react";

function Game(props){
    return ( 
        <div className="nav justify-content-center text-light py-4 bg-info">
            <h4 className="nav-item px-4 bg-info"> Score: {props.score} </h4>
            <h4 className="nav-item px-4 bg-info"> High Score: {props.highScore} </h4>
            <h4 className="nav-item px-4 bg-info"> Win: {props.win} </h4>
            <h4 className="nav-item px-4 bg-info"> Lose: {props.lose} </h4>
        </div>
    )
}
export default Game;