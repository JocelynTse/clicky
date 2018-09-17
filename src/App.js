import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import chars from "./chars.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    chars,
    score: 0,
    clicked: false
  };

  shuffleCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const chars = this.state.chars.filter(char => char.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ chars });
  };



  handleClicked = () => {
    const click = this.state.clicked;
    if (click === false) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ clicked: true });
    } else {
      this.setState({ score: 0 });
    };
  };

  // handleIncrement = () => {
  //   this.setState({ score: this.state.score + 1 });
  // };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <Wrapper>
          <Title>Clicky Game</Title>
          <Score>Score: {this.state.score}</Score>
          {this.state.chars.map(chars => (
            <Card
              shuffleCard={this.shuffleCard}
              id={chars.id}
              key={chars.id}
              image={chars.image}
              clicked={this.handleClicked}
            />
          ))}
        </Wrapper>
      );
    }
  }

export default App;
