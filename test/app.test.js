import { expect } from 'chai';
import { sum } from '../index.js'; // Import the sum function

describe('Sum Function', () => {
  it('should return the sum of two positive numbers', () => {
    const result = sum(5, 10);

    expect(result).to.equal(15);
  });

  it('should return the sum of two negative numbers', () => {
    const result = sum(-5, -10);

    expect(result).to.equal(-15);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = sum(5, -10);

    expect(result).to.equal(-5);
  });

  it('should return the sum of zero and a number', () => {
    const result1 = sum(0, 10);
    const result2 = sum(10, 0);

    expect(result1).to.equal(10);
    expect(result2).to.equal(10);
  });

  it('should return the sum of two zeros', () => {
    const result = sum(0, 0);

    expect(result).to.equal(0);
  });

  it('should return the sum of two decimal numbers', () => {
    const result = sum(5.5, 10.5);

    expect(result).to.equal(16);
  });
});
