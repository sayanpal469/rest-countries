const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries[0]);
    const countryHtml = countries.map(country => getCountry(country))
    const container = document.getElementById('countries')
    container.innerHTML = countryHtml.join(' ')
}
/*
const getCountry = (country) => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}
*/

const getCountry = ({name, flags, capital, timezones}) => {
    return `
        <div class="country">
            <img src="${flags.png}">
            <h2>${name.common}</h2>
            <p>Capital: ${capital}</p>
            <p>Time: ${timezones}</p>
        </div>
    `
}

loadCountries()