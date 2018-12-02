
/*
var reportContents = "Monthly Sales Report" +
+"Date: 03-17-2015"
+"Office: Codeup"
+"==================================================="
+"Employee Number, First Name, Last Name, Sales Units"
+"***************************************************"
+"1, Jane, Janeway, 3"
+"3, Tricia, Triciason, 5"
+"4, Jeannette, Jeanson, 4"
+"5, Charles Emmerson III, Winchester, 2"
+"6, Chet, Chedderson, 8"
+"7, Chaiam, Chaiamson, 12"
+"8, Dale, Dalesinger, 1"
+"9, Zig, Ziglar, 50"
+"10, Henry, Kissinger, 1"
+"11, Arthur Herbert, Fonzarelli, 23"
+"12, Betty, Boop, 67"; */

// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2


var reportContents = "Monthly Sales Report\n" +
    "Date: 03-17-2015\n" +
    "Office: Codeup\n" +
    " ===================================================\n" +
    "Employee Number, First Name, Last Name, Sales Units\n" +
    "***************************************************\n\n" +
    "1, Jane, Janeway, 3\n" +
    "3, Tricia, Triciason, 5\n" +
    "4, Jeannette, Jeanson, 4\n" +
    "5, Charles Emmerson III, Winchester, 2\n" +
    "6, Chet, Chedderson, 8\n" +
    "7, Chaiam, Chaiamson, 12\n" +
    "8, Dale, Dalesinger, 1\n" +
    "9, Zig, Ziglar, 50\n" +
    "10, Henry, Kissinger, 1\n" +
    "11, Arthur Herbert, Fonzarelli, 23\n" +
    "12, Betty, Boop, 67";

var reportContentEdit = reportContents.split("=").join("").split("*").join("").split("\n");
console.log(reportContentEdit);

var reportInfo = reportContentEdit.slice(0, 3).join('\n');
console.log(reportInfo);

var employees = reportContentEdit.slice(7, (reportContentEdit.length));
console.log(employees);

var employeeArray = [] ;
    for(var i = 0; i < employees.length; i++ ) {
        employeeArray[i] = employees[i].split(", ");
        employeeArray[i][3] = parseFloat(employeeArray[i][3])
    }

console.log(employeeArray);

var numberOfEmployees = employeeArray.length;

var totalEmployeeSales = 0;
 for (var j = 0; j < numberOfEmployees; j++){
     totalEmployeeSales = totalEmployeeSales + parseFloat(employeeArray[j][employeeArray[j].length -1]);
 }
 console.log("Total employee sales: "+ totalEmployeeSales);
 var employeeSalesAverage = totalEmployeeSales / numberOfEmployees;
console.log("Employee Sales Average: "+ employeeSalesAverage);
var highest = [];
var employeeRanking = [];
for (var k = 0; k < numberOfEmployees; k++){
    highest.push(myArrayMax(employeeArray[k][employeeArray[k].length -1]));
}
function myArrayMax(arr) {
    return Math.max(null, arr);
}
function sorting(a,b){
    return b[3] - a[3];
}
sorting(employeeArray,employeeArray);
console.log(employeeArray);



// for (var l = 0; l < highest.length; l++){
//         for (var m = 0; m < highest.length ; m++){
//             if (highest[l] === parseFloat(employeeArray[m][3])) {
//                 employeeRanking[l] = employeeArray.splice(employeeArray[1]);
//
//             }
//         }
// }


//console.log(employeeRanking);

// if (highest[m] === parseFloat(employeeArray[l][employeeArray[l].length-1])) {
//     employeeRanking[l] = employeeArray.splice(employeeArray[l].length - 1, 1);
//
// }