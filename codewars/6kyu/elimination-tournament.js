/*
Date of completion: 08-04-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the form of array of arrays.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of encrypted words

-----

Return:

A new string of decrypted words

-----

Example: 

input = [9, 5, 4, 7, 6, 3, 8, 2];

output = [
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
];

------

Pseudo Code: 

function tourney(array)
    result <- [[array]]
    curr <- array dupe

    for loop up to input.length / 2
        let round = []
        while (curr length > 1)
            push max of curr.splice(0, 2)
        curr.concat(last el of result)

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function tourney(array) {
    let result = [array],
        curr = array.slice()
    
    while (result[result.length - 1].length > 1) {
        let round = []
        while (curr.length > 1) {
            round.push(Math.max(...curr.splice(0, 2)))
        }
        result.push(curr.concat(round))
        curr = curr.concat(round)
    }

    return result
}

