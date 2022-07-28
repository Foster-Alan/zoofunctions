const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((element) => element.id === id).responsibleFor[0];
  const theAnimal = species.filter((animal) => animal.id === animalId);
  const oldestAnimal = theAnimal[0].residents.reduce((acc, resident) => {
    if (acc.age > resident.age) {
      return acc;
    } return resident;
  });
  const { age, name, sex } = oldestAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
