const data = require('../data/zoo_data');

// Desconstruir para usar abaixo:
const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  // Capturar id, animal e animal mais velho:
  const animalId = employees.find((element) => element.id === id).responsibleFor[0];
  const theAnimal = species.filter((animal) => animal.id === animalId);
  const oldestAnimal = theAnimal[0].residents.reduce((acc, resident) => {
    if (acc.age > resident.age) {
      return acc;
    } return resident;
  });
  // Desconstruir para usar abaixo:
  const { age, name, sex } = oldestAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
