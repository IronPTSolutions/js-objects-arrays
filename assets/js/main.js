console.log('Main JS file loaded');

function greet(name, lang = 'en') {
  return `Hi ${name}!`;
}

const name = 'Carlos';
const age = 31;


const names = ['Carlos', 'Julio'];
names[0] = ['María'];
names[1] = ['Pepe'];
console.log('Name', names[1]);

// JSON
const user = {
  name: 'Carlos',
  age: 31,
  isDeveloper: true,
  skills: [
    'js',
    'scala',
    'bash'
  ]
}

console.log(user);
const attr = 'name';

console.log('Name', user.name);
console.log('Name', user[attr]);

user.name = 'Carlos del Prado';
console.log(user);

const users = [
  {
    name: 'María',
    age: 30
  },
  {
    name: 'Paco',
    age: 25
  }
]
console.log(users);
for (let i = 0; i < users.length; i++) {
  console.log(greet(users[i].name))
}