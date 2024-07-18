/*
Date of completion: 07-18-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Let's say take 2 strings, A and B, and define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings abc and abd is 2, while the similarity of strings aaa and aaab is 3.

write a function that calculates the sum of similarities of a string S with each of it's suffixes.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lower-case letters

-----

Return:

A number

-----

Examples: 


stringSuffix('aa') -> 3

stringSuffix('abc') -> 3

stringSuffix('ababaa') -> 11


------

Pseudo Code: 
 
function stringSuffix(s) 
    array <- string split
    result <- string length

    for loop, start at 1, go up to string length - 1
        substring <- s substring i
        for loop, j iterator
            if substring i === s i, result++
            else break

    return result


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function stringSuffix(s) {
    let result = s.length

    for (let i = 1; i < s.length; i++) {
        let substring = s.substring(i)
        for (let j = 0; j < substring.length; j++) {
            if (substring[j] === s[j]) result++
                else break
        }
    }

    return result
}
