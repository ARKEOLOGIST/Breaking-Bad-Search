import React, { useState } from 'react';
import './searchChars.css';
import CharacterCard from './characterCard';

function SearchChars() {
    const [ query, setQuery ] = useState('');
    const [ characters, setChars ] = useState([]);

    const searchCharacters = async (e) => {
        e.preventDefault();
        let url = `https://www.breakingbadapi.com/api/characters?name=${query}`;
        if (query == '')
        {
            url = `https://www.breakingbadapi.com/api/characters`;
        }
        setQuery('');

        
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
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
            <div className="card-list">
                {characters.map(character => (
                    <CharacterCard character={character} key={character.id}/>
                ))}
            </div>
        </div>
    );
}

export default SearchChars;