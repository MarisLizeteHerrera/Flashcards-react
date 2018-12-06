import React from "react";
import FLAcard from "./FLAcard";
import { Grid } from "semantic-ui-react";


const FLAcards = ({ flacards, remove, }) => (

  <Grid columns="four" centered>
    <Grid.Row>
      {flacards.map( flacard => ( 
        <Grid.Column>
          < br/>
          <FLAcard key={flacard.id} {...flacard} remove={remove}/>
        </Grid.Column>
      ))
      }
    </Grid.Row>
  </Grid>
)


export default FLAcards;