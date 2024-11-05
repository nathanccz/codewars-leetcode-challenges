/*
Date of completion: 11-05-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Your crazy uncle has found a new hobby - he will occasionally scream out random words of the same length. Since he was a renowned Computer Scientist, you think he must have some pattern to this craziness. The words seem to always have a few letters in the same place, so maybe if you find his pattern his new amusement will stop annoying you.

Create a function that takes a list of words, all as equal length strings, and returns a new string (of the same word length). This string should keep the letters that occur at the same index across all the words, but place an asterisk (*) at indices where the words mismatch.

Assumptions:

-All words are composed entirely of lowercase letters.

-All words have the same length, and are never empty.

-There will always be at least one word in the list.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

A new string

-----

Examples: 

["war", "rad", "dad"]
Result: "*a*" (only the second letter is shared).

["general", "admiral", "piglets", "secrets"]
Result: "*******" (no shared letters).

["family"]
Result: "family" (only one word, so all letters are shared by definition).

------

Pseudo Code: 

function letterPattern(words)
    if words.length is 1, return words[0]
    let result = '',
        hash = {}

    for loop through words, using i to access indices
        hash[i] = hash[i] + word[i] || hash[i] 

    for each entry in hash
        if entry length is 1, add entry value to result
            else add asterisk to result

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function letterPattern(words) {
    if (words.length === 1) return words[0]

    let result = '',
        hash = Object.assign({}, words[0])

    for (const word of words.slice(1)) {
        word.split('').forEach((c, i) => {
            if (hash[i] !== c) hash[i] = '*'
        })
    }

    for (let key in hash) {
        result += hash[key]
    }

    return result
}
