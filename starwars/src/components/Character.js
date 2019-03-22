import React from 'react';
import './Character.css'

const Character = props => {
    return(
        <div className="character-id">
            <h3>name:{props.character.name}</h3>
            <div className="character-info">
                <h4>Birth Year: {props.character.birth_year}</h4>
                <h4>Eye Color: {props.character.eye_color}</h4>
                <h4>Gender: {props.character.gender}</h4>
                <h4>Hair Color: {props.character.hair_color}</h4>
                <h4>Height: {props.character.height}</h4>
                <h4>Mass: {props.character.mass}</h4>
                <h4>Skin Color: {props.character.skin_color}</h4> 
            </div>
            
        </div>
    )
}

export default Character;