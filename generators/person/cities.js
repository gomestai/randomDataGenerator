const citySuffixes = [
  "town",
  "ville",
  " City",
  "borough",
  "ton",
  "land",
  "field",
  "hills",
  "burg",
  "view",
  " Port",
  "stad",
  "furt",
  "chester",
  "mouth",
  " Fort",
  "haven",
  "side",
  "shire",
];

const cityPrefixes = [
  "Fort ",
  "",
  "New ",
  "",
  "Old ",
  "North ",
  "",
  "South ",
  "",
  "East ",
  "",
  "West ",
  "",
  "Upper ",
  "Lower ",
  "Central ",
  "Upper East ",
  "Upper West ",
  "Lower East ",
  "Lower West ",
  "Upper North ",
  "Upper South ",
  "Lower North ",
  "Lower South ",
];

const cityNames = [
  "Park",
  "Ovmont",
  "Lewood",
  "Lakeview",
  "Lake",
  "Yuanita",
  "Yale",
  "Mnolia",
  "Magnolia",
  "Boone",
  "Yellowstone",
  "Yosemite",
  "Xenia",
  "Xotica",
  "Windsor",
  "Otter",
  "Horse",
  "Highland",
  "West",
  "North",
  "South",
  "East",
  "Trinity",
  "Eagle",
];

const randomCity = () => {
  /**
   * @description Generates a random city name
   * @return {string}
   */
  const _city = [];
  const citySuffixesLength = citySuffixes.length;
  const cityPrefixesLength = cityPrefixes.length;
  const cityNamesLength = cityNames.length;

  const prefix = cityPrefixes[Math.floor(Math.random() * cityPrefixesLength)];
  const name = cityNames[Math.floor(Math.random() * cityNamesLength)];
  const suffix = citySuffixes[Math.floor(Math.random() * citySuffixesLength)];

  _city.push(prefix);
  _city.push(name);
  _city.push(suffix);
  const city = _city.join("");

  return city;
};

module.exports = randomCity;
