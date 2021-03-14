import './App.css';
import Pokemons from '../components/Pokemons/Pokemons';
import Navbar from '../components/CustomNavbar/CustomNavbar';
import React, { useState, useEffect } from 'react';
import PokemonContext from '../context/pokemon_context';
import axios from 'axios';
const App = () => {
  const [state,setState] = useState({id:1});
  const [pokemon,setPokemon] = useState("");
  const value={state,setState};

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/'+state.id.toString())
        .then((res)=>{
            const currentPokemon = res.data;
            setPokemon(currentPokemon);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[state.id])

    const handlePokemonIdChange = (event) => {
            setState({id:event.target.value});
    }

  return (
    <div className="App">
      <PokemonContext.Provider value={value}>
        <Navbar 
          changeInput={handlePokemonIdChange}/>
        <Pokemons 
          pokemon={pokemon}/>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
