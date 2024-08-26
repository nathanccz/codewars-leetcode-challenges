/*
Date of completion: 08-27-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers

-----

Return:

An array of arrays 

-----

Examples: 

[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

------

Pseudo Code: 

function sortByDifference(input)
    result <- empty array

    loop through input
        if input has num + 2, push [num, num + 2]

    return result sorted 

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function twosDifference(input) {
    let result = []

    for (let num of input) {
        if (input.includes(num + 2)) result.push([num, num + 2])
    }

    return result.sort((a, b) => a[0] - b[0])
}