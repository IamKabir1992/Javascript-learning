process.stdout.write("Please enter a name: ");
process.stdin.on("data", function(inputFromUser) {
 let givenName = inputFromUser;
 let count = 1;
 while( count <= 5 ) {
    process.stdout.write(givenName);
    count ++;
} 
 process.exit();
});