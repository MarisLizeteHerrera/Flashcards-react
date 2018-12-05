import React from "react";
import FLAcard from "./FLAcard";
import { Grid } from "semantic-ui-react";


const FLAcards = ({ flacards }) => (

  <Grid columns="four" centered divided>
    <Grid.Row>

      {flacards.map( flacard => ( 
        <Grid.Column>
          <FLAcard key={flacard.id} {...flacard}/>
        </Grid.Column>
      ))
      }
    </Grid.Row>
  </Grid>
)

export default FLAcards;