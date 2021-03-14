import React from 'react';
import Pokemon from './Pokemon/Pokemon';

// React bootstrap components
import {Container,Row,Col} from 'react-bootstrap';
const Pokemons = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    <Pokemon 
                        name={props.pokemon.name}
                        sprite={props.pokemon.sprites === undefined  ? "" : props.pokemon.sprites.front_default}
                        types={props.pokemon.types}
                    />
                </Col>
            </Row>
        </Container>
        );
}

export default Pokemons;