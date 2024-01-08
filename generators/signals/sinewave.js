function* sinwave() {
  let t = 0;
  while (true) {
    yield Math.sin(t);
    t += 0.1;
  }
}

const sin = sinwave();

const nLongSinWave = (n) => {
  /**
   * @param {number} n - number of steps
   * @return {number[]}
   */
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(sin.next().value);
  }
  return result;
};

module.exports = nLongSinWave;
