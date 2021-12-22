/**
 * Write a function called solution that
 * Takes in 2 numbers and returns a function
 * The returned function returns the sum when it is called
 * @param {number} num1
 * @param {number} num2
 * @returns {function}
 */

const solution = (num1, num2) => {
  return () => {
    return num1 + num2 //returned function returns the sum of input numbers from solution function
  }
}

module.exports = {
  solution
}
