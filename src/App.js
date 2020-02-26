import React, { Component } from "react";
import CharaCard from "./CharaCard";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import characters from "./characters.json";
import "./App.css";


class App extends Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

  handleClick = id => {
    this.shufflyArray();
    this.scoreHandle(id);
    console.log(this.state.timesClicked);
  };

  scoreHandle = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.Clicked === false) {
        element.Clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.Clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.characters.forEach(element => (element.Clicked = false));
        console.log(this.state.characters);
      }
    });
  };

  shufflyArray = () => {
    ///array for the shuffle///

    const shuffleArry = this.shuffle(this.state.characters);

    this.setState({ shuffleArry });
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });

  };

  ///taking array parameters and shuffle///

  shuffle = array => {
    var currentIndx = array.length,
      temporaryVal,
      randomIndx;

    while (0 !== currentIndx) {
      randomIndx = Math.floor(Math.random() * currentIndx);
      currentIndx -= 1;

      //swap the element//
      temporaryVal = array[currentIndx];
      array[currentIndx] = array[randomIndx];
      array[randomIndx] = temporaryVal;
    }

    return array;

  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore} />

        <Jumbotron />
        {this.state.characters.map(character => (
          <CharaCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image} />
        ))}
      </Wrapper>
    );
  }

}


export default App;
