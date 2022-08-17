import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className=' flex justify-between px-5 text-xl shadow-lg h-14 items-center '>
            <Link to='/'>Main</Link>
            <Link to='/auth'>Auth</Link>
        </nav>
    );
};

export default Navigation;
