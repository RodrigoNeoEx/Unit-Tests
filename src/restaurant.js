const restaurant = {};

const createMenu = (event) => {
  restaurant.fetchMenu = (event);
  restaurant.consumption = [];
  restaurant.order = (request) => { restaurant.consumption.push(request); };
  return restaurant;
};

const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });

module.exports = createMenu;
