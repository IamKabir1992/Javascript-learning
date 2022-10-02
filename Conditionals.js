//Ask the user to input a number.
process.stdout.write("Please enter a number: ");
//Read user input
process.stdin.on( "data", function( inputFromUser ){
    let enteredNumber = Number(inputFromUser);
    //Check if number is 0
    //If yes -> print out "You entered a zero".
    if(enteredNumber == 0 ) {
        process.stdout.write("You entered a zero");
    //If no -> print out "You entered something else".
    } else {
        process.stdout.write("You entered something else");
    }
    process.exit();
    });