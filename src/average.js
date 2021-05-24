const average = (teste) => {
  let sum = 0;
  if (teste.length === 0) {
    return undefined;
  }
  for (let index = 0; index < teste.length; index += 1) {
    if (typeof (teste[index]) !== 'number') {
      return undefined;
    }
    sum += teste[index];
  }
  return Math.round(sum / teste.length);
};

module.exports = average;
