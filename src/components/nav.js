import React from 'react';
import {Link} from 'react-router-dom';


const Nav= ()=>{
    return(
        <React.Fragment>
            <ul>
                <li type='circle'>
                    <Link to="/Home">Home</Link>
                </li>
                <li type='circle'>
                    <Link to="/links">click to see previous works</Link>
                </li>
            </ul>
        </React.Fragment>
    );

};

export default Nav; 