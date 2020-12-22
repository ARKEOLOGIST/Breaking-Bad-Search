import React from 'react';
import './App.css';
//import SearchChars from './components/searchChars';
import Breaking from './images/Breaking-Bad.png';
import Router from './components/router';

function App() {
  return ( 
    <div className = "container">
      <div className="title"><img className="heading" src={Breaking} alt="Breaking Bad"></img></div> 
      <div className="component">
        <Router/>
      </div>
    </div>
  );
}

export default App;