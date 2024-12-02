/*
Date of completion: 11-24-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

We'll think that a "mirror" section in an array is a group of contiguous elements ( > 1) such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in [1, 2, 3, 8, 9, 3, 2, 1] is length 3 (the ...1, 2, 3... part). Return the length of the largest mirror section in the given array.

If the mirror doesn't exist or array is empty, return 0.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers

-----

Return:

A number

-----

Examples: 

maxMirror([0, 1, 2, 3, 8, 9, 3, 2, 1, 9, 8]) → 3
maxMirror([1, 2, 2, 1]) → 4 // palindrome 
maxMirror([1, 2, 1, 4]) → 3 // palindrome part (1, 2, 1)

------

Pseudo Code: 

const maxMirror = (array) 

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const maxMirror = (array) => {
    let hash = {}
    array.forEach((num, i) => {
        hash[num] = i
        if (hash[num]) {
            
        }
    })
}