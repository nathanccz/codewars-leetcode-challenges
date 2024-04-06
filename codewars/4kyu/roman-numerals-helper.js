/*
Date of completion: 03-08-2024 
Codewars Level 4 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

    1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
    2008 is written as 2000=MM, 8=VIII; or MMVIII
    1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given either a number or a Roman numeral string. 

-----

Return:

The toRoman method should return a new string. The fromRoman method should return a number.

-----

Examples: 

//Examples: 

to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
  86 -> "LXXXVI"
   1 -> "

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"LXXXVI"  ->   86
"I"       ->    1

------

Pseudo Code: 

converter <- key:value map for each Roman numeral

class RomanNumerals
    static toRoman(num)
        if num > 4000 throw Error
    result <- ''
    isEqualToOrLessThanConverterVal <- function that returns key value in converter

    while (num > 0)
        subkey <= index of the Object.keys(converter) array 
        result += subKey
        num -= converter[subKey]

    return result

    static fromRoman(str)
        if (some character in the string is not in the converter object) throw Error

        sum <- 0
        copy <- str
        doubleDigitsFirst <- sorted Object.keys(converter) by decreasing string length
        isInCopy <- copy.includes(key)

        while (copy)
            subNumeral <- doubleDigitsFirst.find(key => isInCopy(key))
            sum += converter[subNumeral]
            copy = copy.replace(subNumeral, "")

        if (sum to Roman !== str) throw Error
            else return sum


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const converter = {
  'M': 1000,
 'CM': 900,
  'D': 500,
 'CD': 400,
  'C': 100,
 'XC': 90,
  'L': 50,
 'XL': 40,
  'X': 10,
 'IX': 9,
  'V': 5,
 'IV': 4,
  'I': 1
}

class RomanNumerals {
  static toRoman(num) {
    if (num > 4000) throw new Error('Please enter a positive number less than or equal to 4000')

    let result = ""
    const isEqualToOrLessThanConverterVal = key => converter[key] <= num
    
    while (num > 0) {
        const subKey = Object.keys(converter).find(key => isEqualToOrLessThanConverterVal(key))
        result += subKey
        num -= converter[subKey]
    }

  return result
}

  static fromRoman(str) {
    if ([...str].some(char => !converter[char])) throw new Error('Invalid letter detected.')
    
    let sum = 0
    let copy = str
    const doubleDigitsFirst = Object.keys(converter).sort((a, b) => b.length - a.length)
    const isInCopy = key => copy.includes(key)
    
    while (copy.length > 0) {
        const subNumeral = doubleDigitsFirst.find(key => isInCopy(key))
        sum += converter[subNumeral]
        copy = copy.replace(subNumeral, "")
    }
    
    if (this.toRoman(sum) !== str) throw new Error("Not a valid Roman numeral!")
      else return sum
    }
}