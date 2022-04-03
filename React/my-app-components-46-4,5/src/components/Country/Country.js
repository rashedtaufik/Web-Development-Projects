import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2 className='country-name'>Country Name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
            <p>Region: {props.region}</p>
        </div>
    );
};

export default Country;