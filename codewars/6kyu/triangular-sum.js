/*
Date of completion: 01-24-2025 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Triangular numbers are defined by the formula n * (n + 1) / 2 with n starting from 1. They count the number of objects that can form an equilateral triangle as shown in the picture below:

[Picture not available]

So the sequence of triangular numbers begins as follows:

1, 3, 6, 10, 15, 21, 28, ....

It is proven that the sum of squares of any two consecutive triangular numbers is equal to another triangular number.

You're given a triangular number n. Return true if it can be represented as a sum of squares of two consecutive triangular numbers, or false otherwise.

Input/Output

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A triangular number

-----

Return:

A Boolean

-----

Examples: 

For n = 6, the output should be false.

No two squared consecutive triangular numbers add up to 6.

For n = 45, the output should be true.

3 * 3 + 6 * 6 = 9 + 36 = 45

------

Pseudo Code: 

function triangularSum(n)
    let max = n,
        curr = 0

    loop up to max
        curr = i * formula
        if (curr === max) return false
    
    return false
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function triangularSum(n) {
    let curr = 1, i = 2
    
    while (curr <= n) {
        const num = i * (i + 1) / 2
        if (num**2 + curr**2 === n) return true
        curr = num
        i++
    }
  
    return false
}