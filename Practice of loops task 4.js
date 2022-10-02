const UTIL = require('util');

process.stdout.write("Please enter a number: ");

process.stdin.on("data", function(inputFromUser){
    let givenNumber = Number(inputFromUser);
    let i = 1;
    process.stdout.write(UTIL.format("Multiplication table for %s\n", givenNumber));
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
    while (i <= 10) {
        process.stdout.write(UTIL.format('*%s * %s = %s', i.toString().padStart(7, " "), givenNumber, (i * givenNumber)).padEnd(24, " ") + "*\n");
        i++;
    }
    process.stdout.write(UTIL.format("%s\n", "".padStart(25, "*")));
    process.exit();
})