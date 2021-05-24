const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado.fetchMenu,  { food: {}, drink: {} });
    assert.deepStrictEqual(createMenu({ food: {}, drink: {} }).fetchMenu, objetoRetornado.fetchMenu);
    assert.deepStrictEqual(objetoRetornado.consumption, []);
    objetoRetornado.order('coxinha')
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "sashimi"]);
    objetoRetornado.order("sashimi");
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "sashimi", "sashimi"]);
  });
});
