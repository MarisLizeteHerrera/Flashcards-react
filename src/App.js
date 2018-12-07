import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from "./components/Navbar";
import Main from "./components/Main";

import { Container, Header, } from "semantic-ui-react";


const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/main" component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);


export default App;


// import FLAcards from "./FLAcards";
// import FLAcardForm from "./FLAcardForm";
// import { Container, Header, Grid, Card, Button, Icon, Segment } from "semantic-ui-react";

// class App extends Component {
//   state = {
//     flacards: [
//       { id: 1, question: "fakequestion", answer: "fakeanswer" },
//       { id: 2, question: "fakequestion2", answer: "fakeanswer2" },
//       { id: 3, question: "fakequestion3", answer: "fakeanswer3" },
//     ],
//   };

//   getId = () => {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   };

//   addFLAcard = (flacardData) => {
//     let flacard = { id: this.getId(), ...flacardData, };
//     this.setState({ flacards: [flacard, ...this.state.flacards], });
//   };

//   removeFLAcard = (id) => {
//     const flacards = this.state.flacards.filter( flacard => {
//       if (flacard.id !== id)
//         return flacard
//     });
//     this.setState({ flacards: [...flacards], });
//   };

//   render() {
//     return (
//       <Container style={{ paddingTop: "25px" }}>
//       <Header as="h1">Flashcards</Header>
//       < br/>
//       <FLAcardForm add={this.addFLAcard} />
//       < br/>
//       <FLAcards flacards={this.state.flacards} remove={this.removeFLAcard}/>
//       </Container>
//     );
//   }
// }

// export default App;