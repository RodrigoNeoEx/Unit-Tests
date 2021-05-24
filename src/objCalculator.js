const calculator = {
  add: (event1, event2) => event1 + event2,
  mult: (event1, event2) => event1 * event2,
  div: (event1, event2) => Math.floor(event1 / event2),
  sub: (event1, event2) => event1 - event2,
};

module.exports = calculator;
