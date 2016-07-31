// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(...toAdd);
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupA, ...groupB];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(name, age) {
  console.log('Hi ' + name + ' ' + age);
}

greeting(...person);
greeting(...personTwo);
var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach( name => console.log(`Hi ${name}`) );
