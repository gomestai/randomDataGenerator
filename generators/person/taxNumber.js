const generateTaxNumber = () => {
  /**
   * Generates a random tax number
   * @return {number}
   */
  const taxNumber = Math.floor(Math.random() * 1000000000);
  return taxNumber;
};

module.exports = generateTaxNumber;
