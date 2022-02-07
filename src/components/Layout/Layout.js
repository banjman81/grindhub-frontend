import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

function Layout(props) {
    const {Context} = props
    return(
        <div>
            <Navbar />
            <div><Header /></div>
            <Context />
        </div>);
}

export default Layout;
