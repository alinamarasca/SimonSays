// import React, { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import { ColorButton, Colors } from "./components/ColorButton";
import ControlButton from "./components/ControlButton";
import Title from "./components/Title";

type GameState = {
  sequence: Colors[];
};
class App extends React.Component {
  public constructor(props: {} | Readonly<{}>) {
    super(props);

    const state: GameState = {
      sequence: []
    };

    this.state = state;
    this.startGame = this.startGame.bind(this);
  }

  startGame(state: GameState) {
    const colorValueArray = Object.values(Colors);
    // our sequence => becomes state
    let sequence: any = [];
    // color to add
    let randomIndex: any = Math.floor(Math.random() * colorValueArray.length);
    // this sequence
    let newColor = colorValueArray[randomIndex];

    let newSequence = [...state.sequence, newColor];
    this.setState({
      sequence: newSequence
    });

    console.log("start", this.state);
  }

  render() {
    return (
      <div className="App">
        <Title title="Simon says" />
        <div id="board">
          {Object.values(Colors).map(color => (
            <ColorButton key={color} color={color} />
          ))}
        </div>
        <ControlButton
          text="Play!"
          onClick={(event: any) => {
            this.startGame(this.state as GameState);
          }}
        />
      </div>
    );
  }
}

export default App;
