import { filterCountries } from "./filter.js";
import { renderCountries } from "./render.js";

const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const options = document.querySelectorAll(".option");
let item = document.querySelector(".option");
const optionMenu = document.querySelector(".dropDownCon");
const sBtn_Reg = optionMenu.querySelector(".sBtn-text");
let input = document.getElementById("search-input");

const inf = {
  countname: "",
  region: "",
};

region.forEach((element) => {
  element.addEventListener("click", () => {
    const chosenReg = element.innerText;
    let filteredByNameAndRegion = filterCountries(inf.countname, chosenReg);

    inf.region = chosenReg;

    renderCountries(filteredByNameAndRegion);
  });
});

search.addEventListener("input", () => {
  const conName = search.value.trim();
  let filteredByNameAndRegion = filterCountries(conName, inf.region);
  console.log(conName);

  inf.countname = conName;

  renderCountries(filteredByNameAndRegion);
});

for (item of options) {
  item.onclick = function (e) {
    if (e.target.innerText == "All") {
      input.placeholder = "Search in All Countries...";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "...";
    }
  };
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(optionMenu);
  if (!click) {
    dropElem.classList.add("showDropDown");
  }
});

dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedReg = option.querySelector(".region").innerText;
    sBtn_Reg.innerText = selectedReg;
    dropElem.classList.add("showDropDown");
  });
});
