const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }
  return `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
};

module.exports = vqv;
