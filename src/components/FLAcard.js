import React from "react";
import FLAcardForm from "./FLAcardForm";
import { Card, Button } from "semantic-ui-react";


class FLAcard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content><br/><h1>{this.props.question}</h1><br/><br/></Card.Content>
        <Card.Content>{this.props.answer}</Card.Content>
        <Button inverted color="red" onClick={() => this.props.remove(this.props.id)}>
          Delete
        </Button>
      </Card>
    )
  }
}








// remove goes in FLAcard =({ array
// const FLAcard = ({ id, question, answer, remove }) => (

//   <Card>
//     <Card.Content><br/><h1>{question}</h1><br/><br/></Card.Content>
//     <Card.Content>{answer}</Card.Content>
//     <Button inverted color="red" onClick={() => remove(id)}>
//       Delete
//     </Button>
//   </Card>

// );

export default FLAcard;