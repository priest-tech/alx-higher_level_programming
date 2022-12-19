#!/usr/bin/node
// Get the first argument
const x = process.argv[2];

// Convert the argument to an integer
const num = parseInt(x);

// Check if the argument is a valid integer
if (isNaN(num)) {
  // If the argument is not a valid integer, print an error message
  console.log('Missing number of occurrences');
} else {
  // If the argument is a valid integer, print "C is fun" the specified number of times
  console.log(Array(num + 1).join('C is fun\n'));
}
