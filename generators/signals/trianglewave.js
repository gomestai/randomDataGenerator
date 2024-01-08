function* trianglewave(period, amplitude, offset) {
  while (true) {
    for (let i = 0; i < period; i++) {
      yield (amplitude / period) * i + offset;
    }
    for (let i = period; i > 0; i--) {
      yield (amplitude / period) * i + offset;
    }
  }
}

const triangle = trianglewave(10, 1, 0);

const nLongTrianglewave = (n) => {
  /**
   * @param {number} n - number of steps
   * @return {number[]}
   */
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(+Number(triangle.next().value).toFixed(2));
  }
  return result;
};

module.exports = nLongTrianglewave;
