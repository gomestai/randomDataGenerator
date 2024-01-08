function* squarewave() {
  let i = 0;
  while (true) {
    yield i < 2 ? 1 : 0;
    i = (i + 1) % 4;
  }
}

const square = squarewave();

const nLongSquarewave = (n) => {
  /**
   * @param {number} n - number of steps
   * @return {number[]}
   */
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(square.next().value);
  }
  return result;
};

module.exports = nLongSquarewave;
