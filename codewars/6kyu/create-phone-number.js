/*
Date of completion: 11-11-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of positive integers

-----

Return:

A new string

-----

Examples: 

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111"

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"

------

Pseudo Code: 

function createPhoneNumber(numbers)
    create area code variable by slicing numbers from 0 to 3rd index
    create prefix variable by slicing numbers from 3 to 7th index
    create lineNumber variable by slicing from 7th index

    return template literal with formatted phone number as string

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function createPhoneNumber(numbers) {
  const numStrings = numbers.map((num) => num.toString())

  const areaCode = numStrings.slice(0, 3).join('')
  const prefix = numStrings.slice(3, 6).join('')
  const lineNumber = numStrings.slice(6).join('')

  return `(${areaCode}) ${prefix}-${lineNumber}`
}
