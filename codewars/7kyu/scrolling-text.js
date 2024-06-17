/*
Date of completion: 06-05-2024 
Codewars Level 7 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

- A single string of lower-case letters

-----

Return:

- An array of strings which are all uppercase

-----

Examples: 

scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

------

Pseudo Code: 

ALL_CAPS <- str.toUpperCase
array <- empty array
for loop through str.length
    push ALL_CAPS word to array
    ALL_CAPS substring 1 + ALLCAPS[0]
return array

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function scrollingText(text) {
    let allCaps = text.toUpperCase()
    const results = []
    for (let i = 0; i < text.length; i++) {
        results.push(allCaps)
        allCaps = allCaps.substr(1) + allCaps[0]
    }
    return results
}