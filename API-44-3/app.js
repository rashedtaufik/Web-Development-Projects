const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries[0])
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries1');
    container.innerHTML = countriesHTML.join(' ')
}

const getCountryHTML = country => {
    return `
    <div class="countries">
    <h2>${country.name.common}</h2>
    <h3>Population: ${country.population}</h3>
    <p>${country.altSpellings[1]}</p>
    <img src="${country.flags.svg}">
    </div>
    `
}

loadCountries();




