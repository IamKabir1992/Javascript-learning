process.stdout.write("Please enter two numbers separated with space");
process.stdin.on( "data", function( inputFromUser ){
    let enteredNumber = inputFromUser.toString().split(" ");
    let number1 = enteredNumber[0];
    let number2 = enteredNumber[1];

    process.stdout.write("Entered Number1 is " + number1 + " and number2 is "+ number2);

    process.exit();
    });