const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const soloChild = entrants.filter((child) => child.age < 18).length;
  const soloAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const soloSenior = entrants.filter((senior) => senior.age >= 50).length;
  return {
    child: soloChild,
    adult: soloAdult,
    senior: soloSenior,
  };
}

function calculateEntry(entrants) {
  const price = data.prices;
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const solotChild = entrants.filter((child) => child.age < 18).length;
  const solotAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const soloSenior = entrants.filter((senior) => senior.age >= 50).length;
  const total = (solotChild * price.child)
    + (solotAdult * price.adult)
    + (soloSenior * price.senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
