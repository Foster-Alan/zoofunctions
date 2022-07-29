const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  // Retornar objeto:
  return data.employees
    .find((element) => [element.firstName, element.lastName].includes(employeeName));
}

module.exports = getEmployeeByName;
