/*
Date of completion: 10-10-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A positive integer

-----

Return:

A Boolean

-----

Examples: 

isHappy(1) returns true
isHappy(7) returns true
isHappy(16) returns false

------

Pseudo Code: 

function isHappy(n)
   turn number to strings so we can access digits
   create curr variable to store each result
   create hash to store see numbers

   loop through digits
        create result variable holding the sum of squares
        if result is 1 return true
            else if result exists in hash return false




--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex.

function isHappy(n) {
  const seenNums = {}
  let curr = n.toString()

  while (true) {
    let result = 0

    for (const digit of curr) {
      result += Number(digit) ** 2
    }

    if (result === 1) {
      return true
    } else if (seenNums[result]) {
      return false
    }

    if (!seenNums[result]) {
      seenNums[result] = true
    }

    curr = result.toString()
  }
}
