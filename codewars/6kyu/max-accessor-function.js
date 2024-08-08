/*
Date of completion: 08-08-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The popular JavaScript data visualization library D3 comes with some very cool methods, many of which can be supplied an optional function for accessing properties inside an array of objects.

The d3 max function, for example, can return the max number in an array:

d3.max([1,2,3,4]); // returns 4

Or, when supplied with an accessor function, can return the max number of a specific property for each object in an array of objects:

var people = [{age:12},{age:7},{age:2},{age:4}];
d3.max(people, function(d){ return d.age }); // returns 12

Let's create our own version of max which has similar functionality but only works on numbers. A stub of the function has been created for you along with a couple test cases.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array and an accessor function

-----

Return:

A number

-----

Examples: 

 const fruit = [{apples:2, bananas: 3},
                {apples:15, bananas: 12},
                {apples:4, bananas: 7}];

max(fruit) returns 12

------

Pseudo Code: 

function max(data, accessor)
    if data

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function max(data, accessor) {

    if (arguments.length === 1) return Math.max(...data)
        else {
            let max = -Infinity
           for (let entry of data) {
                const value = accessor(entry)
                if (value > max) max = value
           }
           return max
    }
}