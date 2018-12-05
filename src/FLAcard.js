import React from "react";
import { Card } from "semantic-ui-react";

const FLAcard = ({ question, answer }) => (

  <Card>
    <Card.Content><br/><h1>{question}</h1><br/><br/></Card.Content>
    <Card.Content>{answer}</Card.Content>
  </Card>

);

export default FLAcard;