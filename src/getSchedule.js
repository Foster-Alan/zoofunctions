const data = require('../data/zoo_data');

const nameAnimals = data.species.map((element) => element.name);
const daysWeek = Object.keys(data.hours);
const schedule = Object.fromEntries(
  daysWeek.map((element) => [
    element,
    {
      officeHour:
        data.hours[element].open === 0
          ? 'CLOSED'
          : `Open from ${data.hours[element].open}am until ${data.hours[element].close}pm`,

      exhibition:
        data.hours[element].open === 0
          ? 'The zoo will be closed!'
          : data.species
            .filter((element1) => element1.availability.includes(element))
            .map((element1) => element1.name),
    },
  ]),
);

function getSchedule(scheduleTarget) {
  if (nameAnimals.includes(scheduleTarget)) {
    const indexAnimal = nameAnimals.indexOf(scheduleTarget);
    return data.species[indexAnimal].availability;
  }
  if (daysWeek.includes(scheduleTarget)) {
    return Object.fromEntries([[scheduleTarget, schedule[scheduleTarget]]]);
  }

  return schedule;
}

module.exports = getSchedule;
