process.stdout.write("Please enter a string: \n")
process.stdin.on("data", function(inputFromUser) {
    let givenString = inputFromUser.toString().trim();
    let i = 0;
    while (i < givenString.length) {
        process.stdout.write("\n" + (i + 1) + ". character is " + givenString.charAt(i) + ".");
        i++;
    }
    process.stdout.write("\n\n");
    process.exit();
})

