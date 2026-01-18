// Task 1: create a for loop that prints skills to the console
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

for (let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}

// Task 2: create a while loop that prints numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Task 3: combine Loops and Conditionals
const ages = [15, 20, 25, 30];
for (let j = 0; j < ages.length; j++) {
  if (ages[j] >= 18) {
    console.log(ages[j] + ' is an adult.');
  } else {
    console.log(ages[j] + ' is a minor.');
  }
}

// Mini - Challenge: Combine Loops and Conditionals
const temperatures = [12, 25, 7, 30];
for (let k = 0; k < temperatures.length; k++) {
  if (temperatures[k] >= 20) {
    console.log(temperatures[k] + '°C is warm.');
  } else {
    console.log(temperatures[k] + '°C is cold.');
  }
}
