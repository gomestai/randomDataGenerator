import generators from "../generators/";

const person = generators.person;

const {
  randomCity,
  randomEmail,
  randomFemaleName,
  randomMaleName,
  randomLastName,
  randomPhoneNumber,
  randomPassword,
  randomStreetAddress,
  randomZipCode,
} = person;

const randomPerson = () => {
  const genderBinary = Math.floor(Math.random() * 2);
  const gender = genderBinary ? "male" : "female";
  const name = genderBinary ? randomMaleName() : randomFemaleName();
  const lastName = randomLastName();
  const email = randomEmail(name, lastName);
  const phoneNumber = randomPhoneNumber();
  const password = randomPassword();
  const streetAddress = randomStreetAddress();
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

console.log(randomPerson());
