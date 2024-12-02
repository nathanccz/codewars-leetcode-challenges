/*
Date of completion: 12-02-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character.

You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings

-----

Return:

A single character as string

-----

Examples: 

string1 = "hello"
string2 = "aaahello"

// => 'a'

string1 = "abcde"
string2 = "2db2a2ec"

// => '2'

------

Pseudo Code: 

function addedChar(s1, s2)
    let copy = s1

    loop through s2
        if (!copy) return curr
        if (s1 includes curr)
            copy = copy.replace(curr, '')

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function addedChar(s1, s2){
    let copy = s1

    for (let char of s2) {
        if (!copy || !copy.includes(char)) return char
          else copy = copy.replace(char, '')
    } 
}
