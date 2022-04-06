import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';


const renderPokemon = (pokemon) => (
  <Pokemon key={pokemon.id} pokemon={pokemon} />
);

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokedex-container'>
        {
          pokemons.map(renderPokemon)
        }
      </div>
    );
  }
};

export default Pokedex;