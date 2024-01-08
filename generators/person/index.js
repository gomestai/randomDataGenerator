const randomCity = require("./cities.js");
const randomEmail = require("./emailAddresses.js");
const randomFemaleName = require("./femaleNames.js");
const randomMaleName = require("./maleNames.js");
const randomLastName = require("./lastNames.js");
const randomPhoneNumber = require("./phoneNumber.js");
const randomPassword = require("./passwords.js");
const randomStreetName = require("./streets.js");
const randomZipCode = require("./zipCodes.js");
require("../../utils/removeAccent.js");

function randomNonBinaryName() {
  /**
   * @description Get a random non-binary name
   * @return {string}
   */
  const binary = Math.floor(Math.random() * 2);
  return binary ? randomMaleName() : randomFemaleName();
}

const randomPerson = () => {
  const _gender = Math.floor(Math.random() * 3);

  const gender =
    _gender === 0 ? "Male" : _gender === 1 ? "Female" : "Non-Binary";

  const name =
    _gender === 0
      ? randomMaleName()
      : _gender === 1
      ? randomFemaleName()
      : randomNonBinaryName();
  const lastName = randomLastName();
  const email = randomEmail(name, lastName);
  const phoneNumber = randomPhoneNumber();
  const password = randomPassword();
  const streetAddress = randomStreetName();
  const city = randomCity();
  const zipCode = randomZipCode();

  const person = {
    gender,
    name,
    lastName,
    email,
    phoneNumber,
    password,
    streetAddress,
    city,
    zipCode,
  };
  return person;
};

module.exports = {
  randomPerson,
};
