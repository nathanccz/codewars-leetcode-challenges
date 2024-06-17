/*
Date of completion: 06-06-2024 
Codewars Level 7 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

- A single string of lower-case letters

-----

Return:

- A new string of lower-case letters with the same length as parameter

-----

Examples: 

moveTen("testcase"), "docdmkco")
moveTen("codewars"), "mynogkbc")
moveTen("exampletesthere"), "ohkwzvodocdrobo")

------

Pseudo Code: 

alphabet <- 'abcdefghijklmnopqrstuvwxyz'
for loop through string
    index <- alphabet.indexOf(string[i])
    if index >= 16 string[i] = alphabet[index % 10]
        else string[i] = alphabet[index + 10]

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function moveTen(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let delta = 10, array = str.split('')
    return array.map(l => alphabet.charAt((alphabet.indexOf(l) + delta) % 26)).join('')
}