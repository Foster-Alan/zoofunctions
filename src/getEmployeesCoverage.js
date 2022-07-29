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

function getEmployeesCoverage(param) {
  const condit = param && result.find((element) => element.id === param.id
  || element.fullName.split(' ')[0] === param.name
  || element.fullName.split(' ')[1] === param.name);
  if (condit) {
    return condit;
  }
  if (param) {
    throw new Error('Informações inválidas');
  }
  return result;
}

module.exports = getEmployeesCoverage;
