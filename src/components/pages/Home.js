import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/em'><h3>Look for works</h3></Link>
        </div>);
}

export default Home;
