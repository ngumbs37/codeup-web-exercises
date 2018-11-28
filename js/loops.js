"use strict";
var i = 0;
var j = 1;

console.log("While Loops \n\n");
while (i < 16){
    j= j *2;
    console.log(j);
    i++;
}

// This is how you get a userInput number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

console.log("\n\n");
while (allCones > 0){
    // This expression will generate a userInput number between 1 and 5
    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= allCones) {
        allCones = allCones - conesToSell;
        console.log(conesToSell + " cones sold..."+ allCones+ " left in stock.");
    } else {
            console.log("We only have "+ allCones + ". We can't sell you " + conesToSell + ".");
    }
    if (0 === allCones){
        console.log("We're all out of cones!");
    }
}

