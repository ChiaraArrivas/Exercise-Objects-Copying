const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};



const person2 = Object.assign ({}, person1)
person2.firstName = "Simon"; 
// Modify the property `firstName` of the `person2` in "Simon".

/* Write a comment explaining why, by modifying the object `person2`, also the object `person1` would be modified:
const person2 = person1;
Perchè person2 non è una copia di person1, ma sono lo stesso oggetto. 
*/

console.log(person1);
console.log(person2);
