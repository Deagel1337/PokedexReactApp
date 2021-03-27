import React, { useCallback, useEffect, useState } from 'react';
import Pokemon from './Pokemon/Pokemon';
import PokemonStats from './PokemonStats/PokemonStats';
import PokemonGenderRatio from './PokemonGenderRatio/PokemonGenderRatio';

// React bootstrap components
//TO-Do Entwicklungen

import {Container,Row,Col} from 'react-bootstrap';

const Pokemons = (props) => {
    
   const [genderRatio,setGenderRatio] = useState([{data:0,value:0}]); 

   const calculateGenderRatio = useCallback(() => {
       if(props.genderStats !== undefined){
                
                setGenderRatio([{
                        data:0,
                        value: props.genderStats/8*100
                    },{
                        data:1,
                        value: 100 - (props.genderStats/8*100)
                    }]);
       }
       else{
           setGenderRatio([{data:0,value:0}]);
       }
   },[props.genderStats])
    
    useEffect(() => {
        calculateGenderRatio();
    },[props,calculateGenderRatio])

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
            <Row>
                <Col>
                    <PokemonStats stats={props.pokemon.stats}/>
                </Col>
                <Col>
                    <PokemonGenderRatio 
                        width="200"
                        height="200"
                        innerRadius={60}
                        outerRadius={100}
                        data={genderRatio} />
                </Col>
            </Row>
        </Container>
        );
}

export default Pokemons;