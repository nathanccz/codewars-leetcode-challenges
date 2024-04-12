/*
First attempt: 04-11-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a function makePalindrome that takes a string as the argument and then returns the shortest possible palindrome made from that string without modifying the original string. If more than one palindrome can be made, the function should return the solution where the given string appears at the beginning of the palindrome.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're always given a single-word string. Strings will never be empty.

-----

Return:

The function should return a new string.

-----

Examples: 

makePalindrome('a') --> 'a'
makePalindrome('ab') --> 'aba'
makePalindrome('abc') --> 'abcba'
makePalindrome('race') --> 'racecar'
makePalindrome('leveled') --> 'deleveled'

------

Pseudo Code: 

function makePalindrome(text) 
    reverse <- reverse string
    if reverse === text, return str
    if first letter of reversed === first letter of text
        find last letter of text and find first index of that letter in reverse
    


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution works on smaller tests, but needs to be refactored to handle larger test cases. 

function makePalindrome(text) {
    let reverse = text.split('').reverse().join('')
    if (reverse === text) return text
    let forward = text, backward = text
    for (let i = 0; ; i++) {
        forward += reverse.substring(reverse.lastIndexOf(reverse[0]))[i + 1]
        backward = text.substring(text.lastIndexOf(text[0]))[i + 1] + backward
        if (forward === forward.split('').reverse().join('')) return forward
        if (backward === backward.split('').reverse().join('')) return backward
    }
}

// Log to console
console.log(makePalindrome('leveled'))