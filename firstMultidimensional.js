let jumper1 = ["John Meyer", 12.4, 1];
let jumper2 = ["James Cloud", 12.4, 1];
let allJumpers= [
    [ "John Meyer", 12.4, 1],
["James Cloud", 12.4, 1]
]
for( let i=0; i< allJumpers.length; i++) {
    process.stdout.write("\n" + allJumpers[i][0].toString());
}