/*
Date of completion: 07-26-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of letters without spaces

-----

Return:

A number

-----

Examples: 

solve("zodiac") -> 26
solve("chruschtschov") -> 80
solve("khrushchev") -> 38

------

Pseudo Code: 

function solve(s)
    vowels <- 'aeiou'
    maxValue <- 0
    currValue <- 0 

    loop through string
        currValue += charCode of letter - 96
        if letter is consonant 
            if currValue > maxValue, max = curr
            currValue = 0

    return maxValue    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function solve(s) {
    const vowels = 'aeiou'
    let currValue = 0,
        maxValue = 0

    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            currValue += s[i].charCodeAt(0) - 96
        } else {
            if (currValue > maxValue) maxValue = currValue
            currValue = 0
        }
    }

    return Math.max(maxValue, currValue)
}
