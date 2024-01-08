const generateZipCode = () => {
  /**
   * Generates a random zip code
   * @return {string}
   */
  const zipCode = Math.floor(Math.random() * 100000);
  return zipCode.toString().padStart(5, "0");
};

module.exports = generateZipCode;
