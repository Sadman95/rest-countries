const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const countriesSection = document.getElementById('countries');
const displayCountries = countries =>{
    // for-of loop:
    /*for (const country of countries) {
        console.log(country.name)
    } */
    // forEach method:
    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${country.name}</h3><p>
        Capital: ${country.capital}</p>
        <button onclick="loadDetails('${country.name}')">See Details</button>`;
        div.classList.add('countries');
        countriesSection.appendChild(div);
        // console.log(country)
    })
}

const loadDetails = (coutryName) =>{
    const url = `https://restcountries.eu/rest/v2/name/${coutryName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data))
}
const div = document.createElement('div');
const displayDetail = (details) => {
    const detailsSection = document.getElementById('countryDetails');
    details.forEach(detail => {
        div.innerHTML = `
            <h3>${detail.name}</h3>
            <p>Population: ${detail.population}</p>
            <img width= 200px src="${detail.flag}">
        `;
        div.classList.add('countryDetails');
        detailsSection.appendChild(div);
    })
}