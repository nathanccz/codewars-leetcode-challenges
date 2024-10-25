/*
Date of completion: 10-25-2024 
Leetcode

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings

-----

Return:

A number

-----

Example: 

See description above

------

Pseudo Code: 

const numJewelsInStones = function(jewels, stones)
    hash: empty object
    let result = 0

    loop through jewels
        each jewel should be a new entry in hash, set to true

    loop through stones
        if hash has the stone, add one to result

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const numJewelsInStones = function(jewels, stones) {
    const hash = {}
    let result = 0

    for (let jewel of jewels) {
        hash[jewel] = true
    }

    for (let stone of stones) {
        if (hash[stone]) result++
    }

    return result
};
