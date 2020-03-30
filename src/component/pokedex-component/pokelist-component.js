import React from 'react';
import PokeCell from './pokecell-component';
import { pokeClasses } from '../pokedex-component/pokeclasses.js';

const PokeList = ({ handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
            key={pokeClass.id}
            pokeClass={pokeClass}
            handleOnClick={handleOnClick}
            />
        );
    });

    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default PokeList;