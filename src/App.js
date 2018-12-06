import React, { Component } from 'react';
import FLAcards from "./FLAcards";
import FLAcardForm from "./FLAcardForm";
import { Container, Header, Grid, Card, Button, Icon, Segment } from "semantic-ui-react";

class App extends Component {
  state = {
    flacards: [
      { id: 1, question: "fakequestion", answer: "fakeanswer" },
      { id: 2, question: "fakequestion", answer: "fakeanswer" },
      { id: 3, question: "fakequestion", answer: "fakeanswer" },
    ],
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addFLAcard = (flacardData) => {
    let flacard = { id: this.getId(), ...flacardData, };
    this.setState({ flacards: [flacard, ...this.state.flacards], });
  };

  removeFLAcard = (id) => {
    const flacards = this.state.flacards.filter( flacard => {
      if (flacard.id !== id)
        return flacard
    });
    this.setState({ flacards: [...flacards], });
  };

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
      <Header as="h1">Flashcards</Header>
      < br/>
      <FLAcardForm add={this.addFLAcard} />
      < br/>
      <FLAcards flacards={this.state.flacards} remove={this.removeFLAcard}/>
      </Container>
    );
  }
}

export default App;