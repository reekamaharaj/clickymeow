import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="card bg-info rounded-circle" onClick={() => props.clickedPic(props.id)}>
            <div className="img-container ">
                <img alt={props.name} src={props.image} />
            </div>
            
        </div>
    );
}

export default Card;
