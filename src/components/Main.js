import React from "react";
import FLAcardForm from "./FLAcardForm";
import FLAcard from "./FLAcard";
import { Container, Header, Grid, Card, Button, Icon, Segment } from "semantic-ui-react";

class Main extends React.Component {
  state = {
    flacards: [
      { id: 1, question: "fakequestion", answer: "fakeanswer" },
      { id: 2, question: "fakequestion2", answer: "fakeanswer2" },
      { id: 3, question: "fakequestion3", answer: "fakeanswer3" },
    ],
  };

// function = () => {
//   return (
//     your code
//     map {
//       return (
//         more code
//       )
//     }
//   )
// }


  renderFLAcards = () => {
    return (
  <Grid columns="four" centered>
    <Grid.Row>
      {this.state.flacards.map( flacard => { 
        return (
        <Grid.Column>
          < br/>
          <FLAcard key={flacard.id} {...flacard} remove={this.removeFLAcard} />
        </Grid.Column>
      )})}
    </Grid.Row>
  </Grid>
      )  }





  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  // addFLAcard = (flacardData) => {
  //   let flacard = { id: this.getId(), ...flacardData, };
  //   this.setState({ flacards: [flacard, ...this.state.flacards], });
  // };

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
      { this.renderFLAcards() }
      {/* < br/>
      <FLAcardForm add={this.addFLAcard} /> */}
      < br/>
      {/* <FLAcards flacards={this.state.flacards} remove={this.removeFLAcard}/> */}
      </Container>
    );
  }
}

export default Main;









// import React from "react";
// import FLAcard from "./FLAcard";
// import { Grid } from "semantic-ui-react";

// const FLAcards = ({ flacards, remove, }) => (

//   <Grid columns="four" centered>
//     <Grid.Row>
//       {flacards.map( flacard => ( 
//         <Grid.Column>
//           < br/>
//           <FLAcard key={flacard.id} {...flacard} remove={remove}/>
//         </Grid.Column>
//       ))
//       }
//     </Grid.Row>
//   </Grid>
// )


// export default FLAcards;