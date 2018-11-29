(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Daniel","Camellia","Aki","Koko"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The number of elements in 'names' is "+ names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    var index = 0;
    console.log(names[index]);
    index++;
    console.log(names[index]);
    index++;
    console.log(names[index]);
    index++;
    console.log(names[index]);
    console.log("");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("Loop iterating array elements");
    for(var i = 0; i < names.length; i++){
        console.log("The name "+ names[i] +" is located at the index of "+ i +" in the array 'names'");
    }
    console.log("");
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("forEach Refactor");
    names.forEach(function(ele, ind){
        console.log("The name "+ ele +" is located at the index of "+ ind +" in the array 'names'");
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array){
        return array[0];
    }
    function second(array){
        return array[1]
    }
    function last(array){
        return array[array.length -1]
    }
    console.log("");
    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));
})();
