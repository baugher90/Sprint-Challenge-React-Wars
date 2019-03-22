import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starwarsChars.map(character=>(
                <Character 
                character={character}
                />
            ))}
        </div>
        
    )
}

export default CharacterList;