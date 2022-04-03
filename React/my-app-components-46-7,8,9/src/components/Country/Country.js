import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, area, population, region, flags } = props.country
    return (
        <div className='country bg-info'>
            <h2 className='country-name'>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;