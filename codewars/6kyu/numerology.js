/*
Date of completion: 09-18-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date.

Task:
Calculate the single integer digit by adding up every digit in the birthdate: month, date, full year, from left to right (MMDDYYYY). If the sum is greater or equal to 10, add up the two digits of the sum.

You will be passed in a Date object corresponding to your language.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A Date object

-----

Return:

A positive integer

-----

Examples: 

solution(new Date('10/13/1964')) returns 7
solution(new Date('01/02/2008')) returns 4
solution(new Date('06/14/2010')) returns 5
solution(new Date('02/04/2010')) returns 9

------

Pseudo Code: 

function checkValidTrNumber(n)
    create month variable from Date method, padstart 0
    create day variable, padstart 0 
    create year variable
    create sum variable by adding up the above variables 

    if sum is greater than ten
        create string from number
        Add up two digits and return number

        else retrun sum

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function solution(date) {
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  const year = date.getFullYear().toString()
  const sumStr = month + day + year
  let result = sumStr.split('').reduce((sum, curr) => sum + +curr, 0)

  while (result >= 10) {
    result = result
      .toString()
      .split('')
      .reduce((sum, curr) => sum + +curr, 0)
  }

  return result
}
