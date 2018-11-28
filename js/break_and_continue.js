"use strict";

var userInput = "";
while(true){
    userInput = parseFloat(prompt("Enter a number between 1 and 50"));
    if (userInput > 0 && userInput <= 50){
        break;
    }
}

console.log("Number to skip is : "+ userInput + "\n ");

for (var i = 1; i <= 50; i+=1) {
    if (i === userInput && i % 2 === 1){
        console.log(userInput + " Skipped");
        continue;
    }
    if (i % 2 === 1 ) {
        console.log("Odd number: " + i);
    }
}