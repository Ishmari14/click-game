import React from "react";

function CharaCard(props) {
    return (
        <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick(props.id)} >
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="img-content">
            </div>
        </div >
    )
}

export default CharaCard;