/*
Date of completion: 10-08-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Array of integers, never strings 

-----

Return:

A number 

-----

Examples: 

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

------

Pseudo Code: 

function findOdd(A)
   create hash variable, empty object

   loop through array A
    if element is not a key in hash, set to 1
      otherwise, add 1 to that key

   loop through hash
    if a key has an odd value, return that key

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function findOdd(A) {
  if (A.length === 1) return A[0]

  const hash = {}

  for (const int of A) {
    hash[int] = hash[int] + 1 || 1
  }

  const keys = Object.keys(hash)

  for (const key of keys) {
    if (hash[key] % 2 !== 0) {
      return Number(key)
    }
  }
}
