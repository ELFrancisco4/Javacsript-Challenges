/**
 * Write a function called solution that
 * Takes in 2 functions, returns
 *   the sum of the result of calling the 2 functions
 * @param {function} func1
 * @param {function} func2
 * @returns {number}
 */
 const solution = (func1, func2) => {
  const result1 = func1()
  const result2 = func2()
  return result1 + result2
};


module.exports = {
  solution,
};
