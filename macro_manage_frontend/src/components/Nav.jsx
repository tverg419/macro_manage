import React from 'react';
import { Link } from 'react-router-dom'
function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/meals'>Meals</Link>
            <Link to='/food'>Food</Link>
        </div>
    );
}

export default Nav;