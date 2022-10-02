//Ask the user to input a number.
process.stdout.write("Please enter a number: ");
//Read user input
process.stdin.on( "data", function( inputFromUser ){
    let enteredNumber = Number(inputFromUser);
if(enteredNumber >= 1 && enteredNumber <= 10 ) {
    process.stdout.write("Entered Number is between 1-10");
}
if(enteredNumber < 1 || enteredNumber < 10) {
    process.stdout.write("\nEntered Number is outside 1-10"); 
}
    process.exit();
    });