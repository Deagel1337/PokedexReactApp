import React,{useContext} from 'react';
import Aux from '../../hoc/Aux';
import PokemonContext from '../../context/pokemon_context';
// React Bootstrap Components
import {Navbar, Form} from 'react-bootstrap';


const CustomNavbar = (props) => {
    const value = useContext(PokemonContext);
    
    return (
    <Aux>
        <Navbar bg="dark">
            <Navbar.Brand style={{color:"#17a2b8"}}> Pokemon Info Site</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
            </Navbar.Collapse>
            <Form inline>
                <input 
                    type="text" 
                    placeholder="Pokemon id" 
                    className="mr-sm2" 
                    value={value.id}
                    onChange={props.changeInput} 
                    />
            </Form>
        </Navbar>
    </Aux>);
}

export default CustomNavbar;