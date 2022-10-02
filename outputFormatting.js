// Let's practice output formatting

//To add a package in your code, you can use require:
const util = require( "util" ) ;

let number1 = 2.1324;
let number2 = 342;
process.stdout.write(util.format("\nLet's practice using util. Number1 is %d and \nNumber2 is %d.\n", number1.toFixed(2), number2));