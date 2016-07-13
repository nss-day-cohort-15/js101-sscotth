// PRIMITIVES

console.log('I am a string'); // String
console.log(12); // Number
console.log(true); // Boolean
console.log({color: 'blue', 12: 34, true: false}) // Object
console.log(null); // Null
console.log(undefined); // Undefined

// ARRAYS vs. OBJECTS
console.log(['red', 'green', 'blue'])

// arrays are similar to objects objects with numerical properties and a length
console.log({
  0: 'red',
  1: 'green',
  2: 'blue',
  length: 3
})

// actually, arrays ARE objects
console.log(typeof ['a','b','c'])

// objects are for unordered lists
console.log({
  height: '5 ft 6 inches',
  shoeSize: '10',
  hairColor: 'brown'
})

// arrays are for ordered lists
console.log([
  'Jeff Gordon', 'Dale Earnhart Jr', 'Scott Humphries'
])

// VARIABLE ASSIGNMENT

var person = {
  height: '5 ft 6 inches',
  shoeSize: '10',
  hairColor: 'brown',
  name: 'Bob'
}

var raceResults = [
  'Jeff Gordon',
  'Dale Earnhart Jr',
  'Scott Humphries'
]

// (destructive) ARRAY MANIPULATIONS
raceResults.push('George W. Bush')
raceResults.push('Bill Clinton')
raceResults.pop()
raceResults.shift()
raceResults.unshift('Barack Obama')
console.log(raceResults);

// ACCESSORS
console.log(person.name) // preferred
console.log(person['shoeSize'])

// with variables
var prop = 'hairColor'
console.log(person.hairColor) // wont work
console.log(person[hairColor]) // required

// arrays
// console.log(raceResults.0) // Syntax Error
console.log(raceResults[0]) // preferred
console.log(raceResults['1'])

// calculated accessors
console.log(raceResults[raceResults.length - 1]) // get last item

// LOOPS
// FOR LOOPS
// three statements seperated by semicolon
// 1. before all (only once)
// 2. should continue conditional (while true)
// 3. after each
// Execution order: 1, 2, BLOCK, 3, 2, BLOCK, 3, 2, BLOCK, ... , 3, 2, END

for (var i = 0; i < 10; i++) {
  console.log(i)
} // loop 10 times

for (var i = 0; i < 10; i += 2) {
  console.log(i)
} // loop 5 times

// loop over an array
for (var i = 0; i < raceResults.length; i++) {
  // current item is array[i]
  console.log("Place:", i + 1, raceResults[i])
}

var number = 0

// CONDITIONALS
// IF / ELSE

if (number === 0) {
  // SINGLE EQUAL (=) is assignment
  // DOUBLE EQUAL (==) is equavalent with type conversion
  // TRIPLE EQUAL (===) is equavalent without type conversion
  console.log('the smallest number')
} else if (number < 10) {
  console.log('small number')
} else {
  console.log('big number')
}

// always execuutes after loop
console.log('hello')

// STRINGS

var string = 'I am a string.'

// non destructive
string + 'Changed?'
string + 'Changed?'

// destructive
string += 'Changed #1!'
console.log('After first operation', string);
string += 'Changed #2!'
console.log('After second operation', string);

// implicit type conversion
console.log('2' - 1)
console.log('two' - 1)

// FUNCTIONS

function hello (name) {
  // if arguments is an array of the passed arguments then internal to
  // the function the variable is created with the argument:
  // var name = arguments[0]
  console.log('Hello ' + name)
}

hello('Scott')
hello('Bob')
hello('Jill')
