import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    return (
        <div>
            <h1 className='countries'>Hello Country, I'm Coming..........</h1>
            <h4>Number of Countries: {countries.length}</h4>
            {
                countries.map(country => <Country name={country.name.common} area={country.area} population={country.population} region={country.region}></Country>)
            }
        </div>
    );
};

export default Countries;