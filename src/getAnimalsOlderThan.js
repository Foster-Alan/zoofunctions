const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // Desconstuir para usar abaixo:
  const { residents } = data.species.find((specie) => specie.name === animal);
  // Retornar requisito:
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
