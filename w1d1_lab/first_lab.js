console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came.");
console.log("You wanna be where you can see,");
console.log("our troubles are all the same");
console.log("You wanna be where", "everybody knows");
console.log("Your name.");

// SyntaxError: missing ) after argument list
// part 2 - boolean expressions
// 999 > 999 -- false
// 999 == 999 -- true
// 999 != 999 -- false
// -5 >= -4 -- false
// 100 <= -100 -- false
// 20 + 5 < 5 -- false
// 81 / 9 == 9 -- true
// 9 != 8 + 1 -- false

//part 3 assignment operator
//assigment is to assign the value to a variable
//equality is a comparison to see if the 2 values are exactly the same

//part 3 -- while loops

let count = 0;
while (count < 10) {
  console.log ("Ginger chocolate honey patties");
  count++;
};
count = 0;
while (count < 10) {
  console.log (count);
  count++;
};
count = 0;
while (count < 10) {
  console.log ("Current loop number is: " + count);
  count++;
};

//part 4 - for loops

for(let i = 0; i < 101; i++) {
  console.log(i);
};
for(let i = 7; i < 636; i++) {
  console.log(i);
};

let start = 0;
const limit = 100;
for(let i = start; i <= limit; i++) {
  console.log(i);
};

let startingAmount = 2432;
let compoundInterest = 1.05;
let years = 5;
for(let i = 0; i < years; i++) {
  //console.log(startingAmount);
  startingAmount = startingAmount * compoundInterest;
}
console.log(startingAmount);