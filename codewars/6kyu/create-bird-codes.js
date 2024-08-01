/*
Date of completion: 07-15-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

    If the bird's name has only one word, the code takes the first four letters of that word.

    If the name is made up of two words, the code takes the first two letters of each word.

    If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.

    If the name is four words long, the code uses the first letter from all the words.

(There are other ways that codes are created, but this Kata will only use the four rules listed above)

Complete the function that takes an array of strings of common bird names from North America, and create the codes for those names based on the rules above. The function should return an array of the codes in the same order in which the input names were presented.

Additional considertations:

    The four-letter codes in the returned array should be in UPPER CASE.

    If a common name has a hyphen/dash, it should be considered a space.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

A new array of strings as bird codes

-----

Examples: 

birdCode(["Common Tern", "Black-Capped Chickadee"]) -> ["COTE","BCCH"]

------

Pseudo Code: 

function birdcodes(arr)
    return a mapped array
        switch (element length)
            case 1: return first four letters
            case 2: return first two letters of each element
            case 3: return first letter from first and second element, and first two from third
            default: return first letter from each word

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function birdCode(arr) {
    return arr.map(el => {
        let nameArr = el.toUpperCase().split(/[\s-]+/)
      
        switch(nameArr.length) {
            case 1: return nameArr[0].substring(0, 4)
            case 2: return nameArr[0].substring(0, 2) + nameArr[1].substring(0, 2)
            case 3: return nameArr[0][0] + nameArr[1][0] + nameArr[2].substring(0, 2)
            default: return nameArr.map(e => e[0]).join('')
        }
    })
}
