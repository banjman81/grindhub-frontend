import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px', background: 'gray'}}>
            <div>
                <Link to='/'><h1 style={{margin: '0 20px'}}>GRINDHUB</h1></Link>
            </div>
            <ul style={{display: 'flex', justifyContent: 'space-evenly', width: '30%', listStyleType: 'none'}}>
                <li><Link to='/signup'><h4 style={{margin: '0'}}>SignUp</h4></Link></li>
                <li><Link to='/signin'><h4 style={{margin: '0'}}>SignIn</h4></Link></li>
            </ul>
        </div>);
}

export default Navbar;
