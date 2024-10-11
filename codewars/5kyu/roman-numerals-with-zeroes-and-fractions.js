/*
Date of completion: 10-11-2024 
Codewars or Leetcode Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

We all know about Roman Numerals, and if not, here's a nice introduction kata. And if you were anything like me, you 'knew' that the numerals were not used for zeroes or fractions; but not so!

I learned something new today: the Romans did use fractions and there was even a glyph used to indicate zero.

So in this kata, we will be implementing Roman numerals and fractions.

Although the Romans used base 10 for their counting of units, they used base 12 for their fractions. The system used dots to represent twelfths, and an S to represent a half like so:

1/12 = .
2/12 = :
3/12 = :.
4/12 = ::
5/12 = :.:
6/12 = S
7/12 = S.
8/12 = S:
9/12 = S:.
10/12 = S::
11/12 = S:.:
12/12 = I (as usual)

Further, zero was represented by N

Kata

Complete the method that takes two parameters: an integer component in the range 0 to 5000 inclusive, and an optional fractional component in the range 0 to 11 inclusive.

You must return a string with the encoded value. Any input values outside the ranges given above should return "NaR" (i.e. "Not a Roman" :-)

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two numbers

-----

Return:

A string

-----

Examples: 

roman_fractions(-12)     #=> "NaR"
roman_fractions(0, -1)   #=> "NaR"
roman_fractions(0, 12)   #=> "NaR"
roman_fractions(0)       #=> "N"
roman_fractions(0, 3)    #=> ":."
roman_fractions(1)       #=> "I"
roman_fractions(1, 0)    #=> "I"
roman_fractions(1, 5)    #=> "I:.:"
roman_fractions(1, 9)    #=> "IS:."
roman_fractions(1632, 2) #=> "MDCXXXII:"
roman_fractions(5000)    #=> "MMMMM"
roman_fractions(5001)    #=> "NaR"

------

Pseudo Code: 



--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const intConverter = {
    'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
    'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
    'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1,
}

const fractConverter = ['','.',':',':.','::',':.:']
    
function romanFractions(integer, fraction) {
    if (fraction > 11 || fraction < 0 || integer > 5000 || integer < 0) return "NaR"

    let result = '',
        starting = integer

    const matchConverterVal = key => intConverter[key] <= starting

    while (starting > 0) {
        const subKey = Object.keys(intConverter).find(key => matchConverterVal(key))
        result += subKey
        starting -= intConverter[subKey]
    }
  
    let fractionToRoman = ''

    if (fraction) fractionToRoman = fraction >= 6 ? `S${fractConverter[fraction - 6]}` : fractConverter[fraction]
    
    return integer === 0 && !fraction ? 'N' : result + fractionToRoman
}