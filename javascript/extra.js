"use strict";

/** Functions using conditionals but not loops or arrays: */
// Make a function named isOdd(number)
function isOdd(number){
    if(number % 2 === 1) {
        console.log("number is odd");
    } else {
        console.log("number is not odd");
    }
}
// Make a function named isEven(number)
function isEven(number) {
    if (number % 2 === 0 ){
        console.log("number is even");
    }else {
        console.log("number is not even");
    }
}
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
// Make a function named isFive(input)
function isFive(input) {
    input = 5;
    return input;
}
// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    input = input + 5;
    return input;
}
// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    if (input % 5 === 0) {
        console.log(input + " is a multiple of Five.");
    }else{
        console.log(input + " isn't a multiple of Five.");
    }
}
// Make a function named isThree(input)
function isThree(input){
    input = 3;
    return input;
}
// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input){
    if (input % 3 === 0){
        console.log("number is a multiple of Three.");
    }else {
        console.log("number isn't a multiple of Three.");
    }
}
// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    if (input % 3 === 0 && input % 5 === 0){
        console.log("number is a multiple of three and five");
    }else {
        if (input % 3 === 0){
            console.log("number is a multiple of three but not five");
        }else {
            if (input % 5 === 0){
                console.log("number is a multiple of Five but not three");
            } else {
                console.log("number is not a multiple of three nor five");
            }
        }
    }
}
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n){
    if (target % n === 0 ){
        console.log(target + " is divisible by " + n);
    }else {
        console.log(n + " does not divide into "+ target + " evenly");
    }
}
// Make a function named isTrue(boolean)
function isTrue(boolean){
    if (boolean === true ){
        return boolean; // true
    }
    return boolean; //false
}
// Make a function named isFalse(boolean)
function isFalse(boolean){
    if (boolean === false ){
        return !boolean; // It is true that it is false
    }
    return !boolean; // boolean holds a true value, function returns false
}
/** Make a function named isTruthy(input), remember that values other than true will behave like true
 ** Make a function named isFalsy(input), remember that values other than false behave like false **/
// Checks if input is a number
function isNumber(input){
    return !isNaN(input);
}
// Make a function named isVowel(letter)
function isVowel(letter){
    if (isEmptyString(letter)){
        return null;
    }
    if (oneCharacter(letter)) {
        return null;
    }
    if (letterOnly(letter)){
        return null;
    }

    letter = letter.toLowerCase();
    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            break;
        case "y":
            console.log("Why you ask? This isn't a vowel on its own");
            return null;
        default:
            console.log("Input is not a vowel");
            return null;
    }
  console.log("Input: "+letter+" is a vowel");
}
// Make a function named isConsonant(letter)
function isConsonant(letter){
    if (isEmptyString(letter)){
        return null;
    }
    if (oneCharacter(letter)) {
        return null;
    }
    if (letterOnly(letter)){
        return null;
    }
    letter = letter.toLowerCase();
    switch (letter) {
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "z":
            break;
        case "y":
            console.log("Why would you type 'y' here? It is a consonant though'");
            return null;
        default:
            console.log("Input is not a consonant");
            return null;
    }
    console.log("Input: "+letter+" is a consonant");
}
// checks if string is empty
function isEmptyString(string){
    if (string.length === 0 ){
        console.log("Please enter a character");
        return true;
    }
}
// checks if character is a letter
function letterOnly(input){
  if (isNumber(input)){
      console.log("numbers are not allowed as input for this function");
      return true;
  }
}
// checks string for single character
function oneCharacter(input){
    if (input.length > 1) {
        console.log("Too many characters for this function");
        return true;
    }
    return false;
}
// Make a function named isCapital(letter)
function isCapital(letter) {
    if (isEmptyString(letter)){
        return null;
    }
    if (letterOnly(letter)){
        return null;
    }
    if (oneCharacter(letter)) {
        return null;
    }
    switch (letter){
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "O":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            break;
        default:
            console.log("Input: " + letter + " is lower case.");
            return null;
    }
    console.log("Input: " + letter + " is a capital letter.");
}
// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    if (isEmptyString(letter)){
        return null;
    }
    if (letterOnly(letter)){
        return null;
    }
    if (oneCharacter(letter)) {
        return null;
    }
    switch (letter){
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "h":
        case "i":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "o":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "u":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            break;
        default:
            console.log("Input: " + letter + " is upper case.");
            return null;
    }
    console.log("Input: " + letter + " is a lower case letter.");
}
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input

// Write a function named invertSign(number) that returns a negative version of a positive number,
// a posiitve version of negative, and false for all else.

// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// Make a function named trim(string) that removes empty spaces before and after the input.
// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have.
// Generate a random number between 1 up to and including the number of sides.

// Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
// Make a function called sayHowdy() which console.logs the string “Howdy!”
// Test this function by directly calling sayHowdy()
// Remember this function does not need a defined return value
// Make a function called returnName() that returns the string of your name
// Test this function with console.log(returnName())
// Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
// Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))

// Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
// Write a function called first(input) that returns the first character in the provided string.
// Write a function called last(input) that returns the last character of a string
// Write a function called rest(input) that returns everything but the first character of a string.
// Write a function called reverse(input) that takes a string and returns it reversed.
// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
// Write a function called count(input) that takes in a string and returns the number of characters.
// Write a function called add(a, b) that returns the sum of a and b
// Write a function called subtract(a, b) that return the difference between the two inputs.
// Write multiply(a, b) function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply.
// a and b are the two numbers to run that function on.
//
// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
// Create a function that takes in two string inputs.
// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an “a” (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
// Create a function returnTrueMessage() that returns the string “Hey, it’s true!”
// Create a function returnFalseMessage() that returns the string “Hey, it’s false!”
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
// The function will return true if the username is not the same as the password and the user is at least 18 years old.
// If the user is an admin, they do not have to be a certain age but the password must still not match the username.


"use strict";
//More practice w/ loops and arrays

//Exercise 1:
//Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100;
function oneHundred(){
	var array = [];
	// for (var i = 0; i < 100; i++){
	// 	array.push(i+1);               // uses push() to append to the empty array
	// }

	for (var i = 0; i < 100; i++){
		array[i] = i+1;              //  assigment to indices to builds array
	}
	return array;
}

//Exercise 2:
//Write a function named reverse() that takes in an array and returns a reversed copy of the provided array.
// This function should not alter the original array sent into it.
function reverse(array) {
	var reverseArray = [];
	for (var i = array.length -1 ; i >= 0; i--) {
		reverseArray.push(array[i]);
	}
	return reverseArray;
}
//Exercise 3:
//Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers.
// Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100
function sumAll(addEmUp) {
	var sum = 0;
	for (var i = 0 ; i < addEmUp.length ; i++) {
		sum = sum + addEmUp[i]
	}
	return sum;
}
//Exercise 4:
//Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers.
// Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100

function multiplyAll(input) {
	var product = 1;
	for (var i = 0 ; i < input.length ; i++) {
		product =  product * input[i]
	}
	return product;
}

// searches array for the presence of item and returns an array of all of the occurrences of item
function getAllIndices(array, item) {
	var indices =[];
	// array.forEach(function(element, index){
	// 	if (array[index] === item){
	// 		indices.push(index)
	// 	}
	// });

	for(var i = 0; i < array.length; i++) {
		if (array[i] === item) {
			indices.push(i)
		}
	}
	return indices;
}
// searches through arrays and secondary arrays in the primary
function searchNestedArray(array) {
   for(var i = 0; i < array.length; i++) {
   		if (!Array.isArray(array[i])) {
        console.log("The name "+ array[i] +" is located at the index of "+ i +" in the array");
   		}
        for (var j = 0; j < array[i].length; j++) {
            if (Array.isArray(array[i])) {
                console.log("The name "+ array[i][j] +" is located at the index of "+ j +" of the array in the array");
            }
        }
    }
}


