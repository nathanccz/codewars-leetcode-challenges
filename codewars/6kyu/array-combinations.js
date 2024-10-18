/*
Date of completion: 10-17-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of subarrays, each containing numbers

-----

Return:

A number of unique arrays

-----

Examples: 

solve([[1,2],[4],[5,6]]),4)

solve([[1,2],[4,4],[5,6,6]]),4)

solve([[1,2],[3,4],[5,6]]),8)

solve([[1,2,3],[3,4,6,7],[8,9,10,12,5,6]]),72)

------

Pseudo Code: 

function solve(arr)
    let result = 1    

    loop through arr
        let filtered = new Set(curr)
        result *= filtered.size

    return result if arr.length > 0

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function solve(arr) {
    let result = 1
    for (let subArr of arr) {
        const filtered = new Set(subArr)
        result *= filtered.size
    }
    return arr.length > 0 ? result : 0
}