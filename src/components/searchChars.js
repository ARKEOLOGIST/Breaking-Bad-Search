import React, { useState } from 'react';
import './searchChars.css';
import { Link } from 'react-router-dom';
//import CharacterCard from './characterCard';

function SearchChars() {
    const [ query, setQuery ] = useState('');
    const [ characters, setChars ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ offset, setOffset ] = useState(0);
    const [ end, setEnd ] = useState(false);

    /*useEffect(async () => {
        let url = `https://www.breakingbadapi.com/api/characters`;
        
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setChars(data);
        } catch(err) {
            console.log(err);
        }
    },[]);*/

    const searchCharacters = async (e) => {
        e.preventDefault();
        setLoading(true);
        let url = `https://www.breakingbadapi.com/api/characters?name=${query}&limit=10&offset=0`;
        if (query === '')
        {
            url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=0`;
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

    const updateOffset = async (e) => {
        //console.log(typeof(e.target.value));
        let val = 0;
        if (e.target.value === "-")
        {
            if (offset-10 >= 0)
            {
                setLoading(true);
                setOffset(offset-10);
                val = offset-10;
            }   
        } else if (e.target.value === "+")
        {
            if (!end)
            {
                setLoading(true);
                setOffset(offset+10);    
                val = offset+10;
            } else 
            {
                val = offset;
            }
        }
        let url = `https://www.breakingbadapi.com/api/characters?name=${query}&limit=10&offset=${val}`;
        if (query === '')
        {
            url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=${val}`;
        }
        setQuery('');
        


        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length < 10)
            {
                setEnd(true);
            }
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
            <div className="loader" style={{ display: loading? 'block' : 'none', marginTop: '90px', marginBottom: '90px'}}>
                <div className="loading">
                    Loading...
                </div>
            </div>
            {!loading?<div className="card-list">
                {characters.map(character => (
                        <Link key={character.char_id} to={{ pathname: `/${character.name}`,state: {character: character}}}><img className="element" src={character.img} alt={character.name}></img></Link>
                ))}
            </div>:null}
            {characters.length>0?<div className="navigation">
                    <button className="backward" value="-" onClick={updateOffset}>
                        Backward
                    </button>
                    <button className="forward" value="+" onClick={updateOffset}>
                        Forward
                    </button>
            </div>:null}
        </div>
    );
}

export default SearchChars;