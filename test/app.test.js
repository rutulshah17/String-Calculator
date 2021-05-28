import { expect } from 'chai';
import { getDelimiterAndInputNumbers, splitNumbers, sumOfNums } from '../utils/app.utils.js';
import { add } from '../app.js';

describe('Unit Test: getDelimiterAndInputNumbers', () => {

  it('Valid String with proper delimiter', () => {
    const INPUT_STR = '//$$\n00$$2$$310$$05$$4';

    const output = getDelimiterAndInputNumbers(INPUT_STR);
    expect(output).to.have.length(2);
    expect(output[0]).to.equal('$$', 'First element should be delimeter $$');
    expect(output[1]).to.equal('00$$2$$310$$05$$4', 'Second element should be input string');
  });

  it('String with no \\n character should throw error', () => {
    const INPUT_STR = '//$$\t00$$2$$310$$05$$4';

    expect(() => getDelimiterAndInputNumbers(INPUT_STR))
      .to.throw(RangeError, 'Input must only contain 1 new line character (\\n)');
  });

  it('Empty string after delimiter \\n character should throw error', () => {
    const INPUT_STR = '//$$\n';

    expect(() => getDelimiterAndInputNumbers(INPUT_STR))
      .to.throw(Error, 'Input must not have empty string after delimiter');
  });

});


describe('Unit Test: splitNumbers', () => {

  it('Valid Input with proper delimiter', () => {
    const INPUT_STR = '00$$2$$310$$05$$4';
    const DELIMITER = '$$';

    const output = splitNumbers(INPUT_STR, DELIMITER);
    expect(output).to.have.length(5);
    expect(output).to.eql([0, 2, 310, 5, 4]);
  });

  it('Valid Input including -ve nums with proper delimiter', () => {
    const INPUT_STR = '00$$2$$-310$$05$$4';
    const DELIMITER = '$$';

    const output = splitNumbers(INPUT_STR, DELIMITER);
    expect(output).to.have.length(5);
    expect(output).to.eql([0, 2, -310, 5, 4]);
  });

  it('Valid Input including NaN with proper delimiter', () => {
    const INPUT_STR = '00$$2$$ab$$05$$4';
    const DELIMITER = '$$';

    const output = splitNumbers(INPUT_STR, DELIMITER);
    expect(output).to.have.length(5);
    expect(output).to.eql([0, 2, NaN, 5, 4]);
  });

});


describe('Unit Test: sumOfNums', () => {

  it('Valid Array of numbers', () => {
    const INPUT_NUMBERS = [0, 2, 310, 5, 4];

    const output = sumOfNums(INPUT_NUMBERS);
    expect(output).to.equal(321);
  });


  it('Negative numbers', () => {
    const INPUT_NUMBERS = [0, -2, 310, 5, 4];

    expect(() => sumOfNums(INPUT_NUMBERS))
      .to.throw(Error, 'Negatives not allowed');
  });

  it('Valid numbers with some >1000 members', () => {
    const INPUT_NUMBERS = [0, 2, 3100, 5, 4];

    const output = sumOfNums(INPUT_NUMBERS);
    expect(output).to.equal(11);
  });


  it('Empty Array', () => {
    const INPUT_NUMBERS = [];

    const output = sumOfNums(INPUT_NUMBERS);
    expect(output).to.equal(0);
  });

  it('Undefined Input', () => {
    let INPUT_NUMBERS;

    expect(() => sumOfNums(INPUT_NUMBERS))
      .to.throw(Error, 'Input Numbers must be array');
  });


  it('Non Array Undefined Input', () => {
    let INPUT_NUMBERS = 10;

    expect(() => sumOfNums(INPUT_NUMBERS))
      .to.throw(Error, 'Input Numbers must be array');
  });


});

describe('Unit Test: add function ', () => {

  it('Valid String with proper delimiter', () => {
    const INPUT_STR = '//$$\n00$$2$$310$$05$$4';

    const output = add(INPUT_STR);

    expect(output).to.equal(321);
  });

  it('String with no \\n character should throw error', () => {
    const INPUT_STR = '//$$\t00$$2$$310$$05$$4';

    expect(() => add(INPUT_STR))
      .to.throw(RangeError, 'Input must only contain 1 new line character (\\n)');
  });

  it('Empty string after delimiter \\n character should throw error', () => {
    const INPUT_STR = '//$$\n';

    expect(() => add(INPUT_STR))
      .to.throw(Error, 'Input must not have empty string after delimiter');
  });


  it('Negative numbers', () => {
    const INPUT_NUMBERS = '//$$\n00$$2$$-310$$05$$4';

    expect(() => add(INPUT_NUMBERS))
      .to.throw(Error, 'Negatives not allowed');
  });

  it('Valid numbers with some >1000 members', () => {
    const INPUT_NUMBERS = '//$$\n00$$2$$3100$$05$$4';

    const output = add(INPUT_NUMBERS);
    expect(output).to.equal(11);
  });

});