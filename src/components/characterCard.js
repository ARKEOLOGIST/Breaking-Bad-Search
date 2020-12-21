import React from 'react';
import './characterCard.css';

function CharacterCard(props) {
    return (
        <div className="card">
                <img className="card--image" src={props.character.img}
                    alt={props.character.name}/>
                <div className="card--content">
                    <h2 className="card--title">{props.character.name}</h2>
                    <h3>{props.character.nickname}</h3>
                    <p><small>DATE OF BIRTH: {props.character.birthday}</small></p>
                    <p><small>OCCUPATION: {props.character.occupation.toString()}</small></p>
                    <p><small>STATUS: {props.character.status}</small></p>
                    <p><small>SEASONS: {props.character.appearance?props.character.appearance.toString():null}</small></p>
                    <p><small>PORTRAYED BY: {props.character.portrayed}</small></p>
                </div>
        </div>
    );
}

export default CharacterCard;