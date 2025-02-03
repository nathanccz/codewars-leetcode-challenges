/*
Date of completion: 02-03-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this kata, you have an integer array which was ordered by ascending except one number.

For Example: [1,2,3,4,17,5,6,7,8]
For Example: [19,27,33,34,112,578,116,170,800]

You need to figure out the first breaker. Breaker is the item, when removed from sequence, sequence becomes ordered by ascending.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers

-----

Return:

A number

-----

Examples: 

[1,2,3,4,17,5,6,7,8] => 17 is the only breaker.

[19,27,33,34,112,578,116,170,800] => 578 is the only breaker.

[105, 110, 111, 112, 114, 113, 115] => 114 and 113 are breakers. 114 is the first breaker.
    When removed 114, sequence becomes ordered by ascending => [105, 110, 111, 112, 113, 115]
    When removed 113, sequence becomes ordered by ascending => [105, 110, 111, 112, 114, 115]

[1, 0, 2] => 1 and 0 are the breakers. 1 is the first breaker.
    When removed 1, sequence becomes ordered by ascending => [0, 2]
    When removed 0, sequence becomes ordered by ascending => [1, 2]
    
[1, 2, 0, 3, 4] => 0 is the only breaker.
    When removed 0, sequence becomes ordered by ascending. => [1, 2, 3, 4]

------

Pseudo Code: 

function orderBreaker(input)
    loop through input
        if (current num > input[i + 1]) return current

    return false


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function orderBreaker(input) {
    if (input[0] > input[1]) return input[0]

    for (let i = 1; i < input.length - 1; i++) {
        const curr = input[i]
        const next = input[i + 1]
        const prev = input[i - 1]
        const isInRange = curr > prev && curr < next
        if (!isInRange && next > prev) return curr
    }

   return input[input.length - 1]
}
