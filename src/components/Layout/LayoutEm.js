import React from 'react';
import Header from './Header';
import NavbarEm from './NavbarEm';

function LayoutEm(props) {
        const {Context} = props
return(
<div>
        <NavbarEm />
        <div><Header /></div>
        <Context />
</div>);
}

export default LayoutEm;
