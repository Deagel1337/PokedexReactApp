import React from 'react';
import {Table,ProgressBar} from 'react-bootstrap';

const PokemonStats = (props) => {
    const statsLength = props.stats !== undefined ? props.stats.length : 0;

    const tableContent = () => {
        let categories = [];
             
        for(let i = 0; i < statsLength;i++)
        {
            categories.push(
            <tr key={i} style={{color:"#17a2b8"}}>
                <td key={props.stats[i].stat.name}>
                    {props.stats[i].stat.name}
                </td>
                <td key={props.stats[i].base_stat}>
                    <ProgressBar 
                    now={props.stats[i].base_stat+10}
                    max={255} 
                    label={props.stats[i].base_stat}/>
                </td>
                <td key={"effort:"+props.stats[i].effort+i}>
                    Effort: {props.stats[i].effort}
                </td>
            </tr>)
        }
        
        return categories;
    }

    return(
        <div style={{marginTop:"10px",backgroundColor:"#343a40"}}>
            <Table bordered 
                   variant="dark"
                   style={{marginTop:"10px",color:"#17a2b8"}}>
                <tbody>
                    {tableContent()}
                </tbody>
            </Table>
        </div>
    );
}

export default PokemonStats;