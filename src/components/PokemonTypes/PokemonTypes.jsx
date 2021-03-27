import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import {Image} from 'react-bootstrap';
// Pokemon Types
import Fire from '../../media/pokemon_types_pictures/fire.png';
import Bug from '../../media/pokemon_types_pictures/bug.png';
import Dark from '../../media/pokemon_types_pictures/dark.png';
import Dragon from '../../media/pokemon_types_pictures/dragon.png';
import Electric from '../../media/pokemon_types_pictures/electric.png';
import Fairy from '../../media/pokemon_types_pictures/fairy.png';
import Fighting from '../../media/pokemon_types_pictures/fighting.png';
import Flying from '../../media/pokemon_types_pictures/flying.png';
import Ghost from '../../media/pokemon_types_pictures/ghost.png';
import Grass from '../../media/pokemon_types_pictures/grass.png';
import Ground from '../../media/pokemon_types_pictures/ground.png';
import Ice from '../../media/pokemon_types_pictures/ice.png';
import Normal from '../../media/pokemon_types_pictures/normal.png';
import Poison from '../../media/pokemon_types_pictures/poison.png';
import Psychic from '../../media/pokemon_types_pictures/psychic.png';
import Rock from '../../media/pokemon_types_pictures/rock.png';
import Steel from '../../media/pokemon_types_pictures/steel.png';
import Water from '../../media/pokemon_types_pictures/water.png';

const PokemonTypes = (props) => {
    const PokeTypePath = useState(
       [['fire', Fire],
        ['bug',Bug],
        ['dark',Dark],
        ['dragon',Dragon],
        ['electric',Electric],
        ['fairy',Fairy],
        ['fighting',Fighting],
        ['flying',Flying],
        ['ghost',Ghost],
        ['grass',Grass],
        ['ground',Ground],
        ['ice',Ice],
        ['normal',Normal],
        ['poison',Poison],
        ['psychic',Psychic],
        ['rock',Rock],
        ['steel',Steel],
        ['water',Water]
    ])

    let getPokemonType = () => {
        for(let i = 0; i < PokeTypePath[0].length;i++){
            if(PokeTypePath[0][i][0] === props.type){
                return PokeTypePath[0][i][1];
            }
        }
    }
    
    return(
        <Aux>
            <Image 
                src={getPokemonType()}
                style={{marginRight:"10px"}} />
        </Aux>
    );
}

export default PokemonTypes;