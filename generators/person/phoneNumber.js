const generatePhoneNumber = () => {
  /**
   * Generates a random phone number in the format (XXX) XXX-XXXX
   * @return {string}
   */
  let phoneNumber = "(";
  const areaCode = Math.floor(Math.random() * 1000);
  const firstThree = Math.floor(Math.random() * 1000);
  const lastFour = Math.floor(Math.random() * 10000);
  phoneNumber += areaCode;
  phoneNumber += ") ";
  phoneNumber += firstThree;
  phoneNumber += "-";
  phoneNumber += lastFour;
  return phoneNumber;
};

module.exports = generatePhoneNumber;
