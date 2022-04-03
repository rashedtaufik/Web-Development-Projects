import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <hr />
            </nav>
            <h1>Welcome to World Country</h1>
        </div>
    );
};

export default Header;