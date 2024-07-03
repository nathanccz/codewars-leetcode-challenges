/*
Date of completion: 07-03-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a string of lowercase letters, find substrings that consist of consecutive letters of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.

Note: if there are no alphabet substrings in the input string, return the input string as is.

All inputs will consist of one or more lowercase letters. This kata uses only lowercase strings.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lower-case letters

-----

Return:

A new string if consecutive letters are found

The same string if none are found

-----

Examples: 

("xabc")=> "xcba"

xa is not found in the alphabet, but abc is found, so it is reversed.

("pqrsxdef")=> "srqpxfed"

("jklxyz")=> "lkjzyx"

("vwxcdefg")=> "xwvgfedc"

("vvmnozzstubb")=> "vvonmzzutsbb"

------

Pseudo Code: 

function solution(str)
    let result, input = str
    alphabet = string of lower-case alphabet letters
    
    while input
    let substring
    for loop through string
        add letter to substring
        if (!alphabet includes substring) break
    add subString to result
    replace substring in input with empty string
    
    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function solution(str) {
    let result = '', input = str
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    while (input) {
        let subString = ''
        for (let i = 0; i < input.length; i++) {
            subString += input[i]
            if (!alphabet.includes(subString + input[i + 1])) break
        }
        result += subString.split('').reverse().join('')
        input = input.replace(subString, '')
    }

    return result
}