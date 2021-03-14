import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon/Pokemon';
import axios from 'axios';

// React bootstrap components
import {Container,Row,Col} from 'react-bootstrap';
const Pokemons = () => {
    const [pokemon,setPokemon] = useState("");
    const [pokemonId,setPokemonId] = useState(1);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonId.toString())
        .then((res)=>{
            const currentPokemon = res.data;
            setPokemon(currentPokemon);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[pokemonId])

    const handlePokemonIdChange = (event) => {
            setPokemonId(event.target.value);
    }

    return(
        <Container>
            <Row>
                <Col>
                    <Pokemon 
                        name={pokemon.name}
                        sprite={pokemon.sprites === undefined  ? "" : pokemon.sprites.front_default}
                        types={pokemon.types}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <input value={pokemonId} onChange={handlePokemonIdChange}/>
                </Col>
            </Row>
        </Container>
        );
}

export default Pokemons;