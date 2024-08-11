/*
Date of completion: 08-10-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

-----

Return:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

-----

Examples: 

palindrome(1221)      =>  [22, 1221]
palindrome(34322122)  =>  [22, 212, 343, 22122]
palindrome(1001331)   =>  [33, 1001, 1331]
palindrome(1294)      =>  "No palindromes found"
palindrome("1221")    =>  "Not valid"

------

Pseudo Code: 

function palindrome(num)
    if !isNaN(num) return 'not valid'
    let result = [], 
        stringFromNum = num.toString.split

    for loop through num length

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function palindrome(num) {
    if (typeof num === 'string' || num < 0) return 'Not valid'

    let result = [],
        strFromNum = String(num).split('').join('')

    for (let i = 0; i < strFromNum.length - 1; i++) {
        for (let j = 2; j <= strFromNum.length; j++) {
            let curr = strFromNum.substring(i, j)
            if (curr[0] !== 0 && 
                curr[curr.length - 1] !== 0 && 
                curr.length > 1 &&
                +curr !== 0 &&
                !result.includes(+curr) &&
                curr === String(+curr).split('').reverse().join('')) result.push(+curr)
        }
    }
  if (result.length === 0) return 'No palindromes found'
    else return result.sort((a, b) => a - b)
}