/*
Date of completion: 08-23-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. 

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers

-----

Return:

A new array of numbers indicating their rank

-----

Examples: 

array = [9,3,6,10] --> ranks = [2,4,3,1]

array = [3,3,3,3,3,5,1] --> ranks = [2,2,2,2,2,1,7]

------

Pseudo Code: 

function ranks(arr)
    let uniques be a new set from arr
    let sorted be uniques sorted descending
    let ranking = uniques mapped where if index in arr is <= current ind, uniques[index] + 1, otherwise arr.index    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function ranks(arr) {
    let sorted = arr.slice().sort((a, b) => b - a)
  
    return arr.map(e => sorted.indexOf(e) + 1)
}