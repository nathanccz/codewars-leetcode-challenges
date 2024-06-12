/*
Date of completion: 06-11-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two integers as two separate parameters. 

-----

Return:

The function should return an array of integers.

-----

Examples: 

splitInteger(20, 6) // returns [3, 3, 3, 3, 4, 4]
splitInteger(20, 5) // returns  [4,4,4,4,4]
splitInteger(2, 2) // returns [1,1]

------

Pseudo Code: 

function splitInteger(num, parts)
    result <- []
    smallestDivisor <- Math.floor(num / parts)
    for loop up to num, i++
        push smallestDivisor to result
        num -= smallestDivisor

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function splitInteger(num, parts) {
    const smallestDivisor = Math.floor(num / parts)
    let result = [], number = num
    for (let i = 1; i <= parts; i++) {
        if (smallestDivisor <= number) {
            result.push(smallestDivisor)
            number -= smallestDivisor
        } else result.push(0)
    }
    if (num % parts === 0) return result
        else {
            const remainder = num % parts
            for (let i = 0; i <= remainder - 1; i++) {
                result[i]++
            }
        }
    return result
}