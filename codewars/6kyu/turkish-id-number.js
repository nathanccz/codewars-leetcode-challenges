/*
Date of completion: 09-17-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

- It is an 11 digit number

- First digit can't be zero

- Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
Sum of first ten digits' modulus 10 should be equal to eleventh digit.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number or sometimes a string

-----

Return:

A Boolean

-----

Examples: 

checkValidTrNumber(6923522112) returns false

checkValidTrNumber(692352217312) returns false

checkValidTrNumber(36637640050) returns true

------

Pseudo Code: 

function checkValidTrNumber(n)
    create strNum variable: n to string
    create firstSum, secondSum and firstTenSum variables, all initialized as 0

    if strNum starts with 0 OR strNum length is not 11, return false

    for loop with 10 iterations
        if i is even AND i <= 8, add to first sum
            else add to second sum

        if i <= 9, add to firstTenSum
    
    create difference variable, as firstSum - secondSum

    if difference mod 10 !== strNum[9] **turn to Number** OR firstTenSum !== strNum[10] return false

    return true

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function checkValidTrNumber(n) {
  const strNum = n.toString()
  let firstSum = 0,
    secondSum = 0,
    firstTenSum = 0

  if (strNum.startsWith('0') || strNum.length !== 11) return false

  for (let i = 0; i <= 9; i++) {
    const digit = Number(strNum[i])

    if (isNaN(digit)) return false

    if (i <= 8) {
      if (i % 2 === 0) {
        firstSum += digit
      } else {
        secondSum += digit
      }
    }

    firstTenSum += digit
  }

  const difference = firstSum * 7 - secondSum

  return difference % 10 === +strNum[9] && firstTenSum % 10 === +strNum[10]
}
