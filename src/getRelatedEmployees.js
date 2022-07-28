const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees
    .some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colabor = data.employees
    .filter((managerCollaborator) => managerCollaborator.managers.includes(managerId));
  const result = colabor
    .map((collaborator) => `${collaborator.firstName} ${collaborator.lastName}`);
  return result;
}

module.exports = { isManager, getRelatedEmployees };
