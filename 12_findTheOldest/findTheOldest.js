const findTheOldest = function (arr) {
  return arr.reduce(function (previousPerson, currentPerson) {
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    const previousAge = getAge(
      previousPerson.yearOfBirth,
      previousPerson.yearOfDeath
    );

    return previousAge < currentAge ? currentPerson : previousPerson;
  });

  function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
