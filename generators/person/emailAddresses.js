const tlds = ["com", "net", "org", "edu", "gov", "mil", "biz", "info"];

const fakeDomains = [
  "example",
  "test",
  "fake",
  "sample",
  "demo",
  "invalid",
  "abc",
  "xyz",
  "foo",
  "bar",
  "localhost",
  "localdomain",
  "domain",
  "site",
  "mysite",
  "yoursite",
  "examplesite",
  "testsite",
  "fakesite",
  "sampledomain",
  "demodomain",
  "invaliddomain",
  "abcdomain",
  "xyzdomain",
  "foodomain",
  "bardomain",
  "testdomain",
  "localhostdomain",
];

const generateEmailAddress = (firstName, lastName) => {
  /**
   * Generates a fake email address.
   * @param {string} firstName
   * @param {string} lastName
   * @return {string}
   */

  const _firstName = firstName.toLowerCase().latinize();
  const _lastName = lastName.toLowerCase().latinize();
  const _seperators = [".", "_", ""];
  const _seperator =
    _seperators[Math.floor(Math.random() * _seperators.length)];
  const countryCodes = [
    ".pl",
    "",
    ".de",
    "",
    ".fr",
    "",
    ".es",
    "",
    ".it",
    "",
    ".gb",
    "",
    ".tr",
    "",
    ".ru",
    "",
  ];
  const countryCode =
    countryCodes[Math.floor(Math.random() * countryCodes.length)];

  const _domain =
    fakeDomains[Math.floor(Math.random() * fakeDomains.length)] +
    "." +
    tlds[Math.floor(Math.random() * tlds.length)] +
    countryCode;

  const _emailAddress = `${_firstName}${_seperator}${_lastName}@${_domain}`;

  return _emailAddress;
};

module.exports = generateEmailAddress;
