import { data } from "./index.js";

export function filterCountries(name, reg) {
  let filteredByRegions =
    reg === "" || reg === "All"
      ? data
      : data.filter((item) => item.region == reg);

  console.log(filteredByRegions);
  console.log(reg);

  let filteredByNameAndRegion =
    name === ""
      ? filteredByRegions
      : filteredByRegions.filter((item) =>
          item.name.common.toLowerCase().includes(name.toLowerCase())
        );
  console.log(filteredByNameAndRegion);

  return filteredByNameAndRegion;
}
