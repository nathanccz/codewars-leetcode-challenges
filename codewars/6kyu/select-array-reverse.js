/*
Date of completion: 10-14-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

E.g

selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]
if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
selReverse(array, length)

array - array to reverse
length - length of each portion to reverse

Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

an array of numbers and a number

-----

Return:

an array of numbers

-----

Example: 

selReverse([2,4,6,8,10,12,14,16], 3) returns [ 6, 4, 2, 12, 10, 8, 16, 14 ]
selReverse([1,2,3,4,5,6], 2) returns [ 2, 1, 4, 3, 6, 5 ]
selReverse([1,2,3,4,5,6], 0) returns [ 1, 2, 3, 4, 5, 6 ]
selReverse([1,2,3,4,5,6], 10) returns [ 6, 5, 4, 3, 2, 1 ]

------

Pseudo Code: 

function selReverse(array, length)
    if length is less than of equal to 1, return the input array 

    create results variable as empty array
    create curr variable as empty array

    loop through array
        if i mod length isn't 0
            push number to curr array
            else
                push number to curr array
                reverse array and push to results
                reassign curr to empty array

    if curr has a length greater than 0
        reverse array and push to results

    return results

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function selReverse(array, length) {
  if (length <= 1) return array

  const results = []
  let curr = []

  for (let i = 1; i <= array.length; i++) {
    const num = array[i - 1]
    curr.push(num)

    if (i % length === 0) {
      results.push(...curr.reverse())
      curr = []
    }
  }

  if (curr.length > 0) {
    results.push(...curr.reverse())
  }

  return results
}
