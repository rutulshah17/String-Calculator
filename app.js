import { getDelimiterAndInputNumbers, splitNumbers, sumOfNums } from './utils/app.utils.js';

/**
 * 
 * @param {String} str 
 * @returns 
 */
 export const add = (str) => {

    if (!str) {
        return 0
    }

    const delimiterAndInputNumbersArry = getDelimiterAndInputNumbers(str);
    const splitter = delimiterAndInputNumbersArry[0];
    const numbersArray = splitNumbers(delimiterAndInputNumbersArry[1], splitter);
    return sumOfNums(numbersArray);
};


try {
    const str = '//$$\n00$$2$$310$$05$$4'
    console.log(`Addition of string ${str} := `, add(str))
} catch (error) {
    console.log(error);
}
