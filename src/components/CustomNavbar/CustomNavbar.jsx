import React from 'react';
import Aux from '../../hoc/Aux';

// React Bootstrap Components
import {Navbar} from 'react-bootstrap';

const CustomNavbar = () => {
    return (
    <Aux>
        <Navbar>
            <Navbar.Brand> Pokemon Info Site</Navbar.Brand>
        </Navbar>
    </Aux>);
}

export default CustomNavbar;