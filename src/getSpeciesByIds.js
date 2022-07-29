const data = require('../data/zoo_data');

// Retornar array pedido refatorado:
function getSpeciesByIds(...ids) {
  // seu código aqui
  const selectId = ids.map((id) => data.species.find((specie) => specie.id === id));
  return !ids ? [] : selectId;
}

module.exports = getSpeciesByIds;
