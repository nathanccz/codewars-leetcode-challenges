/*
Date of completion: 11-19-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Complete the function that:

-accepts two integer arrays of equal length
-compares the value each member in one array to the corresponding member in the other
-squares the absolute value difference between those two values
-and returns the average of those squared absolute value difference between each member pair.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An integer array

-----

Return:

A number

-----

Examples: 

[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

------

Pseudo Code: 

function solution = (firstArray, secondArray)
    create sum variable, initialized at 0

    for loop through both arrays
        create difference variable as current element in first array minus second array, squared
        add difference to sum

    return sum divided by firstArray length
    
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
//NOTE: This challenge will be solved without regex.

const solution = (firstArray, secondArray) => {
  let sum = 0

  for (let i = 0; i < firstArray.length; i++) {
    const difference = Math.abs(firstArray[i] - secondArray[i]) ** 2
    sum += difference
  }

  return sum / firstArray.length
}
