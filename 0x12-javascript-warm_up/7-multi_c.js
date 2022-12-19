#!/usr/bin/node
const args = process.argv.slice(2);

if (args.length < 1){
    console.log("Missing number of occurences");
    process.exit(1);
}
const numOccurences = parseInt(args[0]);

if (isNaN(numOccurences)) {
    console.log("Missing number of occurences");
    process.exit(1);
}
for (let i = 0; i < numOccurences; i++){
    console.log('C is fun');
}