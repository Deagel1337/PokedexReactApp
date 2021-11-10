import React from 'react';
import {Image,Card} from 'react-bootstrap';
import PokemonTypes from '../../PokemonTypes/PokemonTypes';
const pokemon = (props) => {

    const decideImage = () => {
        if(props.sprite === "")
            return < Image width="200px" height="200px"/>;
        else
            return <Image 
                    src={props.sprite} 
                    width="200px" 
                    height="200px"
                    style={{margin:"0",alignContent:"center"}}/>;
    
    }
    
    const createTypes = () => {
            if(props.types !== undefined)
            {
                return props.types.map((type) => {
                    return <PokemonTypes 
                                type={type.type.name} 
                                key={type.type.name}/>
                })
            }
            else
            {
                return <p>No Type</p>
            }
    }
    return(
        <React.Fragment>
            <Card
            style={{backgroundColor:"#343a40"}}
            text="info">    
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>
                        {props.name !== undefined ? props.name : "nothing selected"}
                    </Card.Title>
                    {decideImage()}
                    <Card.Subtitle>
                        {createTypes()}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </React.Fragment>);
    
}

export default pokemon;