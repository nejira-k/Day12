// Only change code below this line
var myPetsArray = [
  {
    animalType: "Dog",
    name: ["Pujdo"],
  },
  {
    animalType: "Cat",
    name: ["Maca"],
  },
  {
    animalType: "Bird",
    name: ["Tweety"],
  },
];
function myPetsFunction(pets) {
  pets = myPetsArray[1].name[0];
  return pets;
}
// Only change code above this line
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
