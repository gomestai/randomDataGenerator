const generateTimeSeries = (start, n, stepSize) => {
  /**
   * @param {string} start - start date
   * @param {string} n - number of steps
   * @param {number} stepSize - step size in seconds
   * @return {string[]}
   */
  let result = [];
  let t = new Date(start);
  for (let i = 0; i < n; i++) {
    result.push(t.toISOString());
    t = new Date(t.getTime() + stepSize * 1000);
  }
  return result;
};

module.exports = generateTimeSeries;
