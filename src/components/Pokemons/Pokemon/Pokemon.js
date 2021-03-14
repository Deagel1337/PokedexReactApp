import React from 'react';
import {Image} from 'react-bootstrap';
import PokemonTypes from '../../PokemonTypes/PokemonTypes';
const pokemon = (props) => {

    const decideImage = () => {
        if(props.sprite === "")
            return < Image width="96" height="96"/>;
        else
            return <Image src={props.sprite} />;
    
    }
    
    const createTypes = () => {
            if(props.types !== undefined)
            {
                return props.types.map((type) => {
                    return <PokemonTypes type={type.type.name} key={type.type.name}/>
                })
            }
            else
            {
                return <p>No Type</p>
            }
    }
    return(
        <React.Fragment>
            <h2>It's {props.name !== undefined ? props.name : "nothing selected"}</h2>
            {decideImage()}
            {createTypes()}
        </React.Fragment>);
    
}

export default pokemon;