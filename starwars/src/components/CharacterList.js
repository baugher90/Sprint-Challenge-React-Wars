import React from 'react';
import Character from './Character';
import './CharacterList.css';

const CharacterList = props => {
    return (
        <div className="character-list">
            {props.starwarsChars.map((character, index)=>(
                <Character 
                key={index}
                character={character}
                />
            ))}
        </div>
        
    )
}

export default CharacterList;