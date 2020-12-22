import React, { useState } from 'react';
import './searchChars.css';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import CharacterCard from './characterCard';

function SearchChars() {
    const [ query, setQuery ] = useState('');
    const [ characters, setChars ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const searchCharacters = async (e) => {
        e.preventDefault();
        setLoading(true);
        let url = `https://www.breakingbadapi.com/api/characters?name=${query}`;
        if (query === '')
        {
            url = `https://www.breakingbadapi.com/api/characters`;
        }
        setQuery('');

        
        try {
            const res = await fetch(url);
            const data = await res.json();
            setLoading(false);
            setChars(data);    
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div>
           <form className="form" onSubmit={searchCharacters}>
                <label className="label" htmlFor="query">Character Name</label>
                <input className="input" type="text" name="query" placeholder="i.e. Walter White" value={query} onChange={(e) => {setQuery(e.target.value);}}/>
                <button className="button" type="submit">Search</button>
            </form>
            <br/>
            <div className="loader" style={{ display: loading? 'block' : 'none', marginTop: '90px'}}>
                <div className="loading">
                    Loading...
                </div>
            </div>
            <div className="card-list">
                {characters.map(character => (
                        <img className="element" src={character.img} alt={character.name}></img>
                ))}
            </div>
        </div>
    );
}

export default SearchChars;