/*
Date of completion: 10-15-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Introduction

Ordinal numbers are used to tell the position of something in a list. Unlike regular numbers, they have a special suffix added to the end of them.

Task

Your task is to write the ordinal(number, brief) function. number will be an integer. You need to find the ordinal suffix of said number.

brief is an optional parameter and defaults to false. When using brief notation, nd and rd use d instead. All others are the same.

ordinal(number, brief) should return a string containing those two characters (or one character) that would be tagged onto the end of the number.

The last two digits determine the ordinal suffix.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number

-----

Return:

A string

-----

Example: 

ordinal(1) returns "st"

ordinal(11) returns "th"

ordinal(111) returns "th"

ordinal(121) returns "st"

ordinal(20) returns "th"

ordinal(52) returns "nd");

ordinal(903, true) returns "d"

------

Pseudo Code: 

function ordinal(number, brief)
    create object with ordinal endings

    create lastNums variable using substring
    turn to number

    switch statement
        1: return "st"
        etc

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function ordinal(number, brief) {
  const str = number.toString()
  const lastDigits = str.substring(str.length - 2).padStart(2, '0')

  switch (lastDigits[1]) {
    case '1':
      if (lastDigits[0] !== '1') return 'st'
    case '2':
      if (lastDigits[0] !== '1') return brief ? 'd' : 'nd'
    case '3':
      if (lastDigits[0] !== '1') return brief ? 'd' : 'rd'
    default:
      return 'th'
  }
}
