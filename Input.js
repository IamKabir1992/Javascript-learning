process.stdout.write("Please enter a number: ");
process.stdin.on( "data", function( inputFromUser ){
let enteredNumber = Number(inputFromUser);
let secretNumber = enteredNumber + 1;
process.stdout.write("You entered: " + enteredNumber);
process.stdout.write("\nMy number was: " + secretNumber);
process.stdout.write("\nSorry you lost.")
process.exit();
});
