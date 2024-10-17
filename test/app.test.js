import { expect } from 'chai';
import { sum } from '../index.js'; // Import the sum function

describe('Sum Function', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(5, 10);

    expect(result).to.equal(15);
  });
});
