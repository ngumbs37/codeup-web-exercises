"use strict";

/*For this lesson, perform the following tasks:

    Create two new HTML files, inline_js, and external_js.
    Create a folder named js in the same location as the html files you created.
    Inside the js folder, create a file named external.js.
    Use the sample code from this lesson to fill in the html files with the appropriate code.
    Add a console.log message in inline_js.html that says "Hello from inline JavaScript".
    Add a console.log message in external.js that says "Hello from external JavaScript".
    Open the html files and view the JavaScript Console to make sure you see your messages.


*/
console.log("Hello from external JavaScript");


/*

 Congrats! You now know how to embed JavaScript in a web page. Now let's practice some user interaction.
    Do all of the following work inside of the external.js file.

Use the alert function to show a message that says 'Welcome to my Website!'.

    Use a prompt to ask for the user's favorite color.
    Use the user's response to alert a message that says that the color entered is your favorite color too.

    For example, if the user enters "blue", your code should alert a message that says:

    "Great, blue is my favorite color too!
    */
alert("Welcome to my Website!");
var userColor = prompt("What is your favorite color?");
alert(userColor.toLowerCase() + "is my favorite color too!");


/*
    Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

    When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
    Use an alert to show the results of each problem. */

/* You have rented some movies for your kids:
    The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
    and Hercules (1 day, you don't know yet if they're going to like it).
    If price for a movie per day is $3, how much will you have to pay? */

var moviePrice = prompt("What is the price of renting a movie for a day?");
var mermaid = prompt("How many days will you be renting Little Mermaid?");
var bear = prompt("How many days will you be renting Brother Bear?");
var hercules = prompt("How many days will you be renting Hercules?");
var mermaidCost = moviePrice * mermaid;
var bearCost = moviePrice * bear;
var herculesCost = moviePrice * hercules;
var totalPrice = mermaidCost + bearCost + herculesCost;
alert("The total cost for renting the movies is $" + totalPrice + ".");

/* Suppose you're working as a contractor for 3 companies:
    Google, Amazon and Facebook, they pay you a different rate per hour.
    Google pays $400, Amazon $380, and Facebook $350.
    How much will you receive in payment for this week?
    You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. */


var googleRate = prompt("What is your hourly pay while working for Google?");
var googleHours = prompt("How many hours did you work for Google?");

var amazonRate = prompt("What is your hourly pay while working for Amazon?");
var amazonHours = prompt("How many hours did you work for Amazon?");

var facebookRate = prompt("What is your hourly pay while working for Facebook?");
var facebookHours = prompt("How many hours did you work for Facebook?");

var googlePay = googleRate * googleHours;
var amazonPay = amazonRate * amazonHours;
var facebookPay = facebookRate * facebookHours;

var weeksPay = googlePay + amazonPay + facebookPay;
alert("Your pay for the week is $" + weeksPay + ".");


/* A student can be enrolled to a class only if the class is not full
    and the class schedule does not conflict with her current schedule. */

var maxClassSize = prompt("What is the maximum capacity of the class?");
var currentClassSize = prompt("How many students are enrolled the class now?");
var classStartTime = prompt("What time does the class start? Ex: 1pm");
var studentAvailability = prompt("What time are you available? Ex 1pm");

var seatsOpen = maxClassSize > currentClassSize; // Check if class if full

var freeTime = classStartTime === studentAvailability; // check if the student has time to take class

var canEnroll = seatsOpen && freeTime;
alert("Given the information you've provided.\nIt is " + canEnroll + " that you can enroll in this class.");



/* A product offer can be applied only if people buys more than 2 items,
    and the offer has not expired.
    Premium members do not need to buy a specific amount of products. */


var expired = confirm("Is the code expired?");
var ifPremium = confirm("Are you a Premium member?");
var itemsBought = prompt("How many items have you purchased?");

var canUse = expired && (itemsBought > 2 || ifPremium);
alert(canUse);