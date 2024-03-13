import { showCountry, countriesElem } from "./index.js";

export function renderCountries(arr) {
  console.log(arr);
  countriesElem.innerHTML = "";
  arr.forEach((element) => {
    showCountry(element);
  });
}
