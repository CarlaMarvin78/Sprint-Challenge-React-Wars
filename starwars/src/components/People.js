import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";

function People () {
    const [people, setPeople] = useState();
    axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        const data=response.data;
        setPeople(data);
      })
    useEffect(() => {
      if(people!==undefined) 
      {
          console.log(people);
          const peopleDiv = document.querySelector('.people');
          ReactDOM.render(
            <div>
              {people.results.map(person=><Card person={person}/>)}
            </div> , peopleDiv);
      }
    }, [people])
  
  
    return (
      <div className="people">
      </div>
    );
  }
  
  
  export default People; 
     