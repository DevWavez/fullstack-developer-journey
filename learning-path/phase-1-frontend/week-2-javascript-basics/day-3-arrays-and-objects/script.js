// Task 1: create a Array "skills" and add 3 skills to it.
const skills = ['JavaScript', 'HTML', 'CSS'];

console.log(skills.length);

// Task 2: create an Object "person" with properties: name,age,isDeveloper
const person = {
  name: 'John Doe',
  age: 30,
  isDeveloper: true,
};

console.log(person.name);
console.log(person.age);
console.log(person.isDeveloper);

// Task 3: combine the Array and Object

const developer = {
  name: 'Jane Smith',
  skills: ['Python', 'Django', 'Flask'],
  experienceYears: 5,
};

console.log('Developer name:', developer.name);
console.log('Developer skills:', developer.skills[1]);
