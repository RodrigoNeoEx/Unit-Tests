const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productDetails(1, 2)), true );
    assert.strictEqual(Object.keys(productDetails(1, 2)).length, 2);
    assert.strictEqual(typeof productDetails(1, 2), 'object');
    assert.notStrictEqual(productDetails(1, 1), productDetails(2,2), true);
    assert.strictEqual(productDetails(1, 1)[0].details.productId.endsWith(123), true);
    assert.strictEqual(productDetails(1, 1)[1].details.productId.endsWith(123), true);
  });
});