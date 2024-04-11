/*
Date of completion: 04-10-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're always given a non-empty string of letters, numbers, and symbols (some symbols may be escaped). 

-----

Return:

The function should return a new string.

-----

Examples: 

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"

------

Pseudo Code: 

function camelize(str)
    alphanumeric <- abcdefghijklmnopqrstuvwxyz0123456789'
    copy <- str to lowerCase
    result <- empty string
    for each character in copy
        if it's the first character in the string or the character before it is not a number or letter, capitalize it and add to result
        otherwise, if the alphanumeric string includes the character, add to the result as is
    return a filtered string so that the remaining symbols are deleted

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function camelize(str){
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const copy = str.toLowerCase()
    let result = ''
    for (let i = 0; i < copy.length; i++) {
      if (!copy[i - 1] || !alphanumeric.includes(copy[i - 1])) result += copy[i].toUpperCase()
       else if (alphanumeric.includes(copy[i])) result += copy[i]
    }
    return [...result].filter(char => alphanumeric.includes(char.toLowerCase())).join('')
}