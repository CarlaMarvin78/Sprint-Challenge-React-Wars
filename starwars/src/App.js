import React from 'react';
import './App.css';
import People from './components/People'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const InlineStyle = () => (
    <style>{`
    .grid {
      position: relative;
    }
    .grid:before {
      background-color: #F0F0F0;
      box-shadow: 0px 0px 0px 1px #DDDDDD inset;
      content: '';
      height: calc(100% - 2rem);
      left: 1rem;
      top: 1rem;
      position: absolute;
      width: calc(100% - 2rem);
     }
    .ui.divided.grid:before, .celled.grid:before {
      display: none;
    }
    .ui.aligned .column:after {
      display: none !important;
    }
    .grid .column:not(.row):not(.grid):after {
      background-color: rgba(86, 61, 124, .15);
      box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
      content: '';
      display: block;
      min-height: 50px;
    }
    @media only screen and (max-width: 768px) {
      .stackable.grid:before {
        width: 100%;
        left: 0em;
      }
    }
  `}
  </style>
  )


  return (
   
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <People />
    </div>
  );
}
 
export default App;
