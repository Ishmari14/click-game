import React from "react";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">{props.children}
                <p className="lead">Get points by clicking on character portraits! Don't press more than once or else reset!</p>
            </div>
        </div>
    )
}

export default Jumbotron;