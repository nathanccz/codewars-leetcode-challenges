/*
Date of completion: 10-09-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of any character, including empty chars

-----

Return:

Number

-----

Examples: 

'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1

------

Pseudo Code: 

function countRepeats(str)
    if str length < 2, return 0

    create prevChar variable to hold previous character
    create repetitions variable to count dupes, initialized at 0
    create result variable to track total dupes, initialized at 0

    loop through str
        if current char is equal to prevChar, add 1 to repetitions
            else reassign prevChar to current char
                add repetitions to result
                reset repetitions to 0

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function countRepeats(str) {
  if (str.length < 2) return 0

  let prevChar,
    repetitions = 0,
    result = 0

  for (const char of str) {
    if (char === prevChar) {
      repetitions++
    } else {
      prevChar = char
      result += repetitions
      repetitions = 0
    }
  }

  result += repetitions

  return result
}
