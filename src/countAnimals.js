const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const arraySpecies = data.species;
  if (!animal) {
    return Object.fromEntries(arraySpecies
      .map((element) =>
        [element.name, element.residents.length]));
  }
  const specieSelect = arraySpecies.find((element) => element.name === animal.specie).residents;
  if (animal.sex) {
    return specieSelect.filter((specie) => specie.sex === animal.sex).length;
  }
  return specieSelect.length;
}

module.exports = countAnimals;
