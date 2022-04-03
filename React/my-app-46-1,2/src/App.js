import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])


  return (
    <div>
      <h1>Visiting Every Country of the World!!</h1>
      <h4>Number of Countries: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>NamE: {props.name}</h2>
      <h5>Population: {props.population}</h5>
    </div>
  )
}
export default App;