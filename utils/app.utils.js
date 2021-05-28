/**
 * 
 * @param {String} str 
 * @returns Array
 */
export const getDelimiterAndInputNumbers = (str) => {

  const findingSplitter = str.split('\n');

  if (findingSplitter.length != 2) {
    throw new RangeError('Input must only contain 1 new line character (\\n)');
  }

  if (!findingSplitter[1]) {
    throw new Error('Input must not have empty string after delimiter');
  }

  findingSplitter[0] = findingSplitter[0].replace('//', '');
  return findingSplitter;
}

/**
* 
* @param {Array<Int8Array>} numbers 
*/
export const sumOfNums = (numbers) => {
  if(numbers === undefined || !Array.isArray(numbers)) {
    throw new Error('Input Numbers must be array');
  }

  return numbers.reduce((sum, currentValue) => {
    if (currentValue < 0) {
      throw new Error('Negatives not allowed');
    }

    if (currentValue <= 1000) {
      sum += currentValue
    }
    return sum;
  }, 0);
}

/**
 * 
 * @param {*} numbers 
 * @param {*} delimiter 
 * @returns 
 */
export const splitNumbers = (numbers, delimiter) => {

  return numbers.split(delimiter).map(n => parseInt(n, 10));
}