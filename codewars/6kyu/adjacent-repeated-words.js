/*
Date of completion: 10-02-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of words separated by a space

-----

Return:

A number

-----

Examples: 

"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0

------

Pseudo Code: 

function countAdjacentPairs(searchString)
    let lowercase = searchString to lower case, split to array
    const grouped = lowercase reduced



--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function countAdjacentPairs(searchString) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const filter = str => str.split('').filter(e => letters.includes(e)).join('')
    let lowercase = searchString.toLowerCase().split(' '),
        index = 0 
    
    const grouped = lowercase.reduce((acc, curr, ind) => {
        let word = filter(curr)
        if (!acc[index]) acc[index] = []
        acc[index].push(word)
        if (lowercase[ind + 1] && lowercase[ind] !== filter(lowercase[ind + 1])) index++
        return acc
    }, [])
    
    return grouped.filter(e => e.length > 1).length
}