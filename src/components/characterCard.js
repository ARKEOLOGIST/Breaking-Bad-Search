import React, { useEffect, useState } from 'react';
import './characterCard.css';

function CharacterCard(props) {
    const { character } = props.location.state;
    const [ quotes, setQuotes ] = useState([]);

    useEffect(async () => {
        let url = `https://www.breakingbadapi.com/api/quote?author=${character.name}`;
        
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setQuotes(data);
        } catch(err) {
            console.log(err);
        }
    },[]);

    return (
        <div className="card">
                <img className="card--image" src={character.img}
                    alt={character.name}/>
                <div className="card--content">
                    <h2 className="card--title">{character.name}</h2>
                    <h3>{character.nickname}</h3>
                    <h4>{character.id}</h4>
                    <p><small>DATE OF BIRTH: {character.birthday}</small></p>
                    <p><small>OCCUPATION: {character.occupation.toString()}</small></p>
                    <p><small>STATUS: {character.status}</small></p>
                    <p><small>SEASONS: {character.appearance?character.appearance.toString():null}</small></p>
                    <p><small>PORTRAYED BY: {character.portrayed}</small></p>
                    {quotes?quotes.map((quote) => {
                        return <h3>{quote.quote}</h3>
                    }):null}
                </div>
        </div>
    );
}

export default CharacterCard;