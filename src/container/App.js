import './App.css';
import Pokemons from '../components/Pokemons/Pokemons';
import Navbar from '../components/CustomNavbar/CustomNavbar';
import React from 'react';

const PokemonContext = React.createContext();

const App = () => {
  return (
    <div className="App">
      <PokemonContext.Provider>
        <Navbar />
        <Pokemons />
      </PokemonContext.Provider>
      
    </div>
  );
}

export default App;
