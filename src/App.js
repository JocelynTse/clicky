import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import chars from "./chars.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    chars
  };

  shuffleCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const chars = this.state.chars.filter(char => char.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ chars });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.cards.map(cardd => (
          <FriendCard
            shuffleCard={this.shuffleCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
