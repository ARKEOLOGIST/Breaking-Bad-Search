import React from 'react';
import './App.css';
import SearchChars from './components/searchChars';
import Breaking from './images/Breaking-Bad.png';

function App() {
  return ( 
    <div className = "container">
      <div className="title"><img className="heading" src={Breaking}></img></div> 
      <div className="component">
        <SearchChars/>
      </div>
    </div>
  );
}

export default App;