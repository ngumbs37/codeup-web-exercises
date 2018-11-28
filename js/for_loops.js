"use strict";

console.log("\n\n For Loops");
function showMultiplicationTable(number){
    for (var n = 1; n <= 10; n++){
        console.log(number + " x " + n + " = " + n*number);
    }
}

showMultiplicationTable(7);
console.log("\n");
for (var n = 0; n < 10; n++){
    var ranNum = Math.floor(Math.random() * 200) + 20;
    if (ranNum % 2 === 0){
        console.log(ranNum + " is even.");
    } else{
        console.log(ranNum + " is odd.");
    }
}

console.log("\n");

var line = "";
for (var a = 1; a <= 9; a++) {
    for (var b = 1 ; b <= a; b++) {
        line = line + a;
    }
    line = line + "\n";
}
console.log(line);

console.log("\n");

for (var c = 100; c > 0; c -= 5){
    console.log(c);
}