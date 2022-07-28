const data = require('../data/zoo_data');

const result = data.employees.map((elementSpecie) => (
  {
    id: elementSpecie.id,
    fullName: `${elementSpecie.firstName} ${elementSpecie.lastName}`,
    species: elementSpecie.responsibleFor.map((elementId) => (
      data.species.find((element1) => (element1.id === elementId)).name
    )),
    locations: elementSpecie.responsibleFor.map((elementId) => (
      data.species.find((element2) => (element2.id === elementId)).location
    )),
  }
));

function getEmployeesCoverage(nameOrId) {
  const condit = nameOrId && result.find((element) => element.id === nameOrId.id
  || element.fullName.split(' ')[0] === nameOrId.name
  || element.fullName.split(' ')[1] === nameOrId.name);
  if (condit) {
    return condit;
  }
  if (nameOrId) {
    throw new Error('Informações inválidas');
  }
  return result;
}

module.exports = getEmployeesCoverage;
