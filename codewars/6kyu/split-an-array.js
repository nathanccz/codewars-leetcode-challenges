/*
Date of completion: 09-21-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array containing at least one integer, and a number representing the expected iterations

-----

Return:

A new array of summed integers

-----

Examples: 


splitAndAdd([1,2,3,4,5], 2) returns [5,10]

splitAndAdd([1,2,3,4,5], 3) returns [15]

splitAndAdd([15], 3) returns [15]

splitAndAdd([32,45,43,23,54,23,54,34], 2) returns [183, 125]

splitAndAdd([32,45,43,23,54,23,54,34], 0) returns [32,45,43,23,54,23,54,34]

------

Pseudo Code: 
 
function splitAndAdd(arr, n)
    const copy = arr.slice()
    
    loop through arr, up to n times
        const half copy length / 2, floored
        let top = copy.splice(0, arr length / 2, floored),
    
        if top.length < half, unshift top with 0
        copy = copy.map((n, i) => n + top[i]

        if copy length is 1, return copy

    return copy

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function splitAndAdd(arr, n) {
    let copy = arr.slice()

    for (let i = 0; i < n; i++) {
        const half = Math.floor(copy.length / 2)
        let top = copy.slice(0, half)

        if (top.length < copy.length / 2) top.unshift(0)
            
        copy = copy.slice(half).map((n, i) => n + top[i])
      
        if (copy.length === 1) return copy
    }

    return copy
}