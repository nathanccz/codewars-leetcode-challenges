/*
Date of completion: 10-06-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

For example, if the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number

-----

Return:

A number

-----

Examples: 


amountOfPages(5) returns 5

amountOfPages(25) returns 17

amountOfPages(1095) returns 401        

amountOfPages(185) returns 97

amountOfPages(660) returns 256

------

Pseudo Code: 

function amountOfPages(summary)
    if summary is less than 10, return summary

    create result variable, initialized at 0
    create copy of summary number

    while loop
    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function amountOfPages(summary) {
  let totalPages = 0
  let currentDigitLength = 1
  let remainingDigits = summary

  while (remainingDigits > 0) {
    const groupSize = 9 * Math.pow(10, currentDigitLength - 1)
    const groupDigitCount = groupSize * currentDigitLength

    if (remainingDigits <= groupDigitCount) {
      return totalPages + Math.floor(remainingDigits / currentDigitLength)
    }

    totalPages += groupSize
    remainingDigits -= groupDigitCount
    currentDigitLength++
  }

  return totalPages
}
