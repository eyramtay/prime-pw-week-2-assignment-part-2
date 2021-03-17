// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it equal to 'Dane'
/* We have an 'if/else' conditional statement stating if 'Dane' is the same value of 'Mary' then log 'Hi, Mary!'
and if not, then log 'How do you do?' */
// Since 'Dane' does not equal 'Mary', we will console log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret with no value assigned.
// We create a variable named code and assign it to '123' as the value.
/* We create a conditional statement if the variable code is equal to '123', then
the variable secret equals the string 'super'. Then the variable code now equals
'123 * 2' - and now for the second if conditional statement: if the new value of code is greater than
250, then the variable secret now equals the string 'duper'.
We will console log the value of secret, which is the string 'super' because '123 * 2 is less than 250'. */

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE

/* Here we create 3 variables (isStudent, age, & zip) and assign them values of (true, 34, & 55407 - respectively),
Then we create an if/else conditional statement stating if the variable 'isStudent' equals true AND the
variable 'zip' is greater than 80000, then we will console log "You're a student on the West Coast!" if not,
if 'isStudent' equals false OR the variable 'age' is less than 30 then we will console log "What are your hobbies?" if not,
if 'isStudent' equals true, then we will console log "Welcome to Prime!" if not, then we will console log "How about the weather?"
*/

//REVISION:
/* The result of the code down below would log: "Welcome to Prime!" in the console based on the
values of the variables. */

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - set the variable colorOne to equal 'blue' & the variable colorTwo to equal 'red' .
// FIX - if mix is true, then make sure colorOne AND colorTwo are both set to 'purple'.

if (mix === true) {
  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

// FIX - change the conjuction from '|| - or' to the '&& - and' conjuction.

*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than *or equal to* minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

// FIX - rewrite the if conditional statement to say if the age is greater than or equal to minAge:
"if (age >= minAge) then console log "enter"
instead of what is currently written.

*/
