/*
Date of completion: 08-03-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

    values: an array of integers with an arbitrary length; may be positive and negative

    n: how many integers should be summed; always 0 or bigger

All values given to the functions will be integers. Also take care of the following special cases:

    if values is empty, both functions should return 0
    
    if n is 0, both functions should also return 0
    
    if n is larger than values's length, use the length instead.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of integers and a number

-----

Return:

const values = [5, 4, 3, 2, 1];
minimumSum(values, 2); // should return 1+2 = 3
maximumSum(values, 3); // should return 3+4+5 = 12

-----

Examples: 

See description above

------

Pseudo Code: 

function minimumSum(values, n)
    sorted <- sort array ascending order, slice at n 

    return sorted reduced to sum

function maximumSum(values, n)
    sorted <- sort array descending order, slice at n 

    return sorted reduced to sum

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function minimumSum(values, n) {
    const sorted = values.slice().sort((a, b) => a - b).slice(0, n)

    return sorted.reduce((sum, curr) => sum + curr, 0)
}

function maximumSum(values, n) {
    const sorted = values.slice().sort((a, b) => b - a).slice(0, n)

    return sorted.reduce((sum, curr) => sum + curr, 0)
}