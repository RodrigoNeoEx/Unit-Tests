const createStudent = (event) => {
  const estudante = {
    name: event,
    feedback: () => 'Eita pessoa boa!',
  };
  return estudante;
};

module.exports = createStudent;
