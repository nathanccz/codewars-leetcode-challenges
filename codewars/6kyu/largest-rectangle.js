/*
Date of completion: 07-28-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a strictly positive integer n, the goal of this Kata is to find every possible pair of integers (a, b) whose product of their squares is equal to n:

n=a²∗b²
Return a 2D array of these pairs.ß

-The order of elements within a pair does not matter: [2, 3] is considered the same as [3, 2].

-The order of the pairs within the array does not matter: [ [1, 2], [3, 4] ] is the same as [ [3, 4], [2, 1] ].

-The array should not contain duplicate pairs. [2, 1] is a duplicate of [1, 2].

-If there are no pairs that satisfy the equation, return an empty array [].

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A positive integer

-----

Return:

An array of arrays

-----

Examples: 

- squareProduct(256) --> [ [1, 16], [2, 8], [4, 4] ] (or [ [4, 4], [16, 1], [2, 8] ] , or [ [1, 16], [8, 2], [4, 4] ]... etc.)

- squareProduct(2) --> []

- squareProduct(1) --> [ [1, 1] ]

- squareProduct(81) --> [ [1, 9], [3, 3] ]


------

Pseudo Code: 
 
function squareProduct(n) 
    create max variable as the square root of n
    create results array
    
    loop up to max / 2




--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function squareProduct(n) {
  const max = Math.sqrt(n)
  const results = []
  const seen = {}

  for (let i = 1; i <= max; i++) {
    const rightNum = Math.sqrt(n / i ** 2)

    if (rightNum === Math.floor(rightNum) && !seen[rightNum]) {
      results.push([i, rightNum])
    }

    seen[i] = true
  }

  return results
}
