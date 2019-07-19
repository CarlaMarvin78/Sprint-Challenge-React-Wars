import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import { Grid } from 'semantic-ui-react';

function People () {
    const [people, setPeople] = useState();
    
    useEffect(() => {
      axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        const data=response.data;
        setPeople(data.results.map((person,idx)=><Grid.Column key={idx}><Card person={person}/></Grid.Column>));
      })
    }, [])
  
  
    return (
      <div className="people">
        <Grid columns={5}>{people}</Grid>
      </div>
    );
  }
  
  
  export default People; 
     