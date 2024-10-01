/*
Date of completion: 10-1-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

ISBN stands for International Standard Book Number.

For more than thirty years, ISBNs were 10 digits long. On January 1, 2007 the ISBN system switched to a 13-digit format. Now all ISBNs are 13-digits long. Actually, there is not a huge difference between them. You can convert a 10-digit ISBN to a 13-digit ISBN by adding the prefix number (978) to the beginning and then recalculating the last, check digit using a fairly simple method.

Method:

Take the ISBN ("1-85326-158-0").

Remove the last character, which can be a number or "X".

Add the prefix number (978) and a hyphen (-) to the beginning.

Take the 12 digits, then alternately multiply each digit from left to right by 1 or 3.

Add up all 12 numbers you got.

Take the number and perform a modulo 10 division.

If the result is 0, the check digit is 0. If it isn't 0, then subtract the result from 10. In this case, that is the check digit.

Add the check digit to the end of the result from step 3.

Return the 13-digit ISBN in the appropriate format:

"prefix number - original ISBN except the last character - check digit"

"978 - 1 - 85326 - 158 - 9"


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An ISBN as a string

-----

Return:

A new ISBN-13 string
-----

Examples: 

isbnConverter("1-85326-158-0") returns "978-1-85326-158-9"

isbnConverter("0-14-143951-3") returns "978-0-14-143951-8"

isbnConverter("0-02-346450-X") returns "978-0-02-346450-8"

------

Pseudo Code: 

function isbnConverter(isbn) 
    let prefixed = 978 + isbn substring up to third to last char
    let digits = prefixed split to array, mapped to numbers
    let sum of digits = 0

    for (let i = 1; i < digits.length; i++)
        if i mod 2 !== 0, sum of digits += digits[i - 1]
            else sum of digits += digits[i - 1] * 3

    let modulo = sum of digits % 10

    const checkDigit = modulo === 0 ? 0 : 10 - modulo

    return prefixed + '-checkDigit'

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function isbnConverter(isbn) {
    const prefixed = '978-' + isbn.substring(0, isbn.length - 2)
    const twelveDigits = [...prefixed].filter(n => !isNaN(+n))
    let sumOfDigits = 0

    for (let i = 1; i <= 12; i++) {
        if (i % 2 !== 0) sumOfDigits += +twelveDigits[i - 1]
            else sumOfDigits += +twelveDigits[i - 1] * 3
    }

    const modulo = sumOfDigits % 10
    const checkDigit = modulo === 0 ? 0 : 10 - modulo

    return prefixed + `-${checkDigit}`
}