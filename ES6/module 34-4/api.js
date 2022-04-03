const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('allcountries');
    for (const country of countries) {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
          <h3>${country.name.common}</h3>
          <p>${country.capital}</p>
          <p>${country.population}</p>
          <button onclick="loadCountryDetail('${country.name.common}')">Details</button>
          `
        countriesDiv.appendChild(div);
        // console.log(country)
    }

}

// Collection Url Link:https://restcountries.com/v3.1/name/{name}

const loadCountryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4>${country.name.common}</h4>
    <p>Capital: ${country.capital}</p>
    <p>Poplulation: ${country.population}</p>
    <img src="${country.flags.png}" alt="">
`
}