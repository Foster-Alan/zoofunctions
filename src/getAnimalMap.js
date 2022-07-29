const data = require('../data/zoo_data');

const { species } = data;

const creatAMap = () => species.reduce((acc, element) => {
  const animalFilter = species.filter((item) => item.location === element.location);
  const animalMap = animalFilter.map((item) => item.name);
  acc[element.location] = animalMap;
  return acc;
}, {});

const nomeMap = () => species.reduce((acc, element) => {
  acc[element.location] = [];
  species.forEach((animal) => {
    if (animal.location === element.location) {
      return acc[element.location].push({
        [animal.name]: animal.residents.map((item) => item.name),
      });
    }
  });
  return acc;
}, {});

const nameSort = () => species.reduce((acc, element) => {
  acc[element.location] = [];
  species.forEach((animal) => {
    if (animal.location === element.location) {
      return acc[element.location].push({
        [animal.name]: animal.residents.map((item) => item.name).sort(),
      });
    }
  });
  return acc;
}, {});

const nameSex = (param1) => species.reduce((acc, element) => {
  acc[element.location] = [];
  species.forEach((animal) => {
    if (animal.location === element.location) {
      return acc[element.location].push({
        [animal.name]: animal.residents.filter((item) => item.sex === param1.sex)
          .map((item) => item.name),
      });
    }
  });
  return acc;
}, {});

const sortNameSex = (param1) => species.reduce((acc, element) => {
  acc[element.location] = [];
  species.forEach((animal) => {
    if (animal.location === element.location) {
      return acc[element.location].push({
        [animal.name]: animal.residents.filter((item) => item.sex === param1.sex)
          .map((item) => item.name).sort(),
      });
    }
  });
  return acc;
}, {});

const verifi = (param1) => {
  if (Object.keys(param1).includes('sex') && Object.keys(param1).includes('sorted')) {
    return sortNameSex(param1);
  }
  if (Object.keys(param1).includes('sorted')) {
    return nameSort();
  }
  if (Object.keys(param1).includes('sex')) {
    return nameSex(param1);
  }
  return nomeMap();
};

function getMap(param1) {
  if (!param1 || !Object.keys(param1).includes('includeNames', undefined)) {
    console.log('if undefined e sem nome');
    return creatAMap();
  }
  return verifi(param1);
}

module.exports = getMap;
