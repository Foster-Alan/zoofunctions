const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  // Armazenar pessoas e retorna-las:
  const soloChild = entrants.filter((child) => child.age < 18).length;
  const soloAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const soloSenior = entrants.filter((senior) => senior.age >= 50).length;
  const pessoas = {
    child: soloChild,
    adult: soloAdult,
    senior: soloSenior,
  };
  return pessoas;
}

function calculateEntry(entrants) {
  const price = data.prices; // Preço de cada pessoa para usar com facilidade.
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  // Armazenando novamente para a funçao enchergar:
  const soloChild = entrants.filter((child) => child.age < 18).length;
  const soloAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const soloSenior = entrants.filter((senior) => senior.age >= 50).length;
  const total = (soloChild * price.child) // somando tudo.
    + (soloAdult * price.adult)
    + (soloSenior * price.senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
