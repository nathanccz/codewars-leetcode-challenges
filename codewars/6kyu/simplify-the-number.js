/*
Date of completion: 02-18-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a positive integer as input, return the output as a string in the following format:

Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.

- If the digit is zero, exclude it from the output;
- For the last digit, just use the digit itself, without *1.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A positive

-----

Return:

A new string 

-----

Examples: 

0     -->  ""
56    -->  "5*10+6"
60    -->  "6*10"
999   -->  "9*100+9*10+9"
10004 -->  "1*10000+4"

------

Pseudo Code: 

function simplify(number)
    if number is 0, return ""
    if number is less than 10 return number as string

    create result string, initialized as empty
    create numberString variable as number to string

    loop through numberString 
        create substring variable start at the current index in loop
        create numberOfZeroes variable substring length - 1

        if digit isn't 0 AND numberOfZeroes > 0
            concat to result string: digit * 1 + 0 repeated numberOfZeroes times +

            else if digit isn't 0 AND numberOfZeroes === 0
                concat digit to result

    return result
    
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function simplify(number) {
  if (number === 0) return ''

  const numberString = number.toString()

  if (number < 10) return numberString

  let result = ''

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i]
    const substring = numberString.substring(i)
    const numberOfZeroes = substring.length - 1

    if (+digit > 0 && numberOfZeroes > 0) {
      result += digit + '*' + '1' + '0'.repeat(numberOfZeroes) + '+'
    } else if (digit > 0 && numberOfZeroes === 0) {
      result += digit
    }
  }

  if (result.endsWith('+')) result = result.substring(0, result.length - 1)

  return result
}
