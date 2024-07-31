/*
Date of completion: 07-15-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

*********
* olleH *
* dlroW *
*********

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

String of words separated by space

-----

Return:

A new string, formatted

-----

Examples: 

See description above

------

Pseudo Code: 

function mirror(text)
    array <- text split by space
    longest <- word with most characters
    asterisks <- '*' repeated longest + 4 + '\n'
    result <- asterisks

    loop through array
        line <- '* word reversed *'
        concat line to result

    return result + asterisks


    


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function mirror(text) {
    const array = text.split(' ')
    const longest = array.slice().sort((a, b) => b.length - a.length)[0]
    const asterisks = '*'.repeat(longest.length + 4) 
    let result = ''

    for (let word of array) {
        let padded = word.split('').reverse().join('').padEnd(longest.length, ' ')
        result += `* ${padded} *\n`
    }

    return asterisks + '\n' + result + asterisks
}