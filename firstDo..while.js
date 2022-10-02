process.stdout.write("Please enter a name: ");
process.stdin.on("data", function(inputFromUser) {
 let givenName = inputFromUser;
 let count = 1;
 do {
    process.stdout.write(givenName);
    count ++;
} while( count <= 5 )
 process.exit();
});