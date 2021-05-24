const assert = require('assert');
const numbers = require('../src/numbers');

describe('#numbers', () => {
  it('should return an array and return if it has only numbers or not', () => {
   assert.strictEqual(numbers([2, 3, 4]), true);
   assert.strictEqual(numbers([2, 'errado', 5]), false);
  });
});
