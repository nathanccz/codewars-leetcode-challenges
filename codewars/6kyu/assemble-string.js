/*
Date of completion: 10-09-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

If the array is empty, then return an empty string.

Examples:

input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
result = "abcde"


input = [
  "a*c**",
  "**cd*",
  "a*cd*"
]
result = "a#cd#"

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings, each string is the same length as the others

-----

Return:

A new string

-----

Examples: 


assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]) returns "Hello, World!"

assembleString([".** . .' .'' ! ! .", ". . . .' **' ! * .", "* . .*.* .'' * ! .", ". . .*.' .**** ! .", "**. * .* .*' ! ! ."]), ". . . .' .'' ! ! ."

assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."]) returns ". . . ."

assembleString(["12***6789", "**3456789", "12345**8*", "***456**9", "1*3*5*7*9", "*2*456789"]) returns "123456789"

assembleString(["******", "******", "******", "******"]) returns "######"

assembleString(["*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*"]) returns "###############"

------

Pseudo Code: 

function assembleString(array)
    create result variable, initialized as empty string

    loop through array input
        create set from string




--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function assembleString(array) {
  let result = []

  for (const string of array) {
    for (let i = 0; i < string.length; i++) {
      if (result[i] === '*' || !result[i]) {
        result[i] = string[i]
      }
    }
    if (!result.includes('*')) {
      return result.join('')
    }
  }

  if (result.includes('*')) {
    result = result.map((char) => (char === '*' ? '#' : char))
  }

  return result.join('')
}
