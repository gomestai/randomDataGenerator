function* sawtooth() {
  let i = 0;
  while (true) {
    yield i;
    i = (i + 0.1) % 1;
  }
}

const saw = sawtooth();

const nLongSawtooth = (n) => {
  /**
   * @param {number} n - number of steps
   * @return {number[]}
   */
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(+Number(saw.next().value / 10).toFixed(2));
  }
  return result;
};

module.exports = nLongSawtooth;
