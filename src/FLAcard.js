import React from "react";
import { Card, Button } from "semantic-ui-react";

const FLAcard = ({ id, question, answer, remove }) => (

  <Card>
    <Card.Content><br/><h1>{question}</h1><br/><br/></Card.Content>
    <Card.Content>{answer}</Card.Content>
    <Button inverted color="red" onClick={() => remove(id)}>
      Delete
    </Button>
  </Card>

);

export default FLAcard;