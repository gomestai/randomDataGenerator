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

const nLongTrianglewave = (n, wavelength, amplitude, minimum) => {
  /**
   * @param {number} n - number of steps
   * @param {number} period - period of the wave
   * @param {number} amplitude - amplitude of the wave
   * @param {number} minimum - minimum value of the wave
   * @return {number[]}
   */
  const triangle = trianglewave(wavelength, amplitude, minimum);

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(+Number(triangle.next().value).toFixed(2));
  }
  return result;
};

module.exports = nLongTrianglewave;
