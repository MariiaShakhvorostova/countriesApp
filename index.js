export const countriesElem = document.querySelector(".countries");

async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  res.forEach((element) => {
    showCountry(element);
  });
  return res;
}

export let data = await getCountry();
console.log(data);

export function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `
    <div class="country-img">
      <img src="${data.flags.png}" alt="" />
    </div>
    <div class="country-info">
      <h5 class="countryName">${data.name.common}</h5>
      <p><strong>Population</strong> ${data.population}</p>
      <p class="regionName"><strong>Region</strong> ${data.region}</p>
      <p><strong>Capital</strong> ${data.capital}</p>
    </div>
  `;
  countriesElem.appendChild(country);
}
