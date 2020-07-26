// 1. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
//const is for variables that have values that do not change
//let is for variables that have values that might be changed
//var is similar to let but is obsolete
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
console.log(a == a < d);
console.log(e !== 'kevin');
console.log(48 == '48');
console.log(f != e);
let g = 1000;
console.log(g);
g = b + c;
console.log(g);

// Did you use const, let or var? Why did you choose the one you chose?
//I used let. The value of g was to be changed

// What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//using const throws an error. error says "assignment to constant variable"

// what happens if you write 10 = g?
// error
console.log(a < (b || f) === !f && d < c)
