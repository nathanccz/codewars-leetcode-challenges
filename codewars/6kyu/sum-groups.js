/*
Date of completion: 08-28-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it can be done and return the length of the final array.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A sorted array of numbers

-----

Return:

An array of strings representing ranges

-----

Examples: 

sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]) -> 6

sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 3, 3, 3, 9, 2]) -> 5

sumGroups([1]) -> 1


------

Pseudo Code: 
 
function sumGroups(arr)
  result <- empty array,
  function to check if a number is even or odd

  if there are no elements that have the same even or odd value as the next element, return array.length

  push first element in array to result

  starting at second element, loop through arr
    if the result of even or odd function applied curr is equal to previous element
      add num to the last element of the results array
      else push num to results array

  return sumGroups (result)

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function sumGroups(arr) {

  let result = []
  const evenOrOdd = num => num % 2 === 0 ? 'even' : num !== undefined ? 'odd' : NaN
  
  if (!arr.some((e, i, a) => evenOrOdd(e) === evenOrOdd(a[i + 1]))) return arr.length

  result.push(arr[0])

  for (let i = 1; i < arr.length; i++) {
    if (evenOrOdd(arr[i]) === evenOrOdd(arr[i - 1])) {
      result[result.length - 1] += arr[i]
    } else result.push(arr[i])
  }

  return sumGroups(result.slice())
  
}




