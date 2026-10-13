/*
Date of completion: 10-13-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Unsorted array of numbers

-----

Return:

A number (the dupe)

-----

Examples: 

findDup([1, 2, 3, 1]) // 1
findDup([5, 4, 3, 2, 1, 1]) // 1
findDup([1, 3, 2, 5, 4, 5, 7, 6]) // 5
findDup([8, 2, 6, 3, 7, 2, 5, 1, 4]) // 2
findDup([1, 1]) // 1

------

Pseudo Code: 

function findDup(array)
    if array length is two, return first element

    create hash object, call it seenNums

    loop through array
        if the element is not in seenNums
            set number in seenNums to true
            
            else return element

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function findDup(array) {
  if (array.length === 2) return array[0]

  const seenNums = {}

  for (const num of array) {
    if (!seenNums[num]) {
      seenNums[num] = true
    } else {
      return num
    }
  }
}
