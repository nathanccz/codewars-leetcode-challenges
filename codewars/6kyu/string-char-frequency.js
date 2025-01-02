/*
Date of completion: 01-02-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string

-----

Return:

A Boolean

-----

Examples: 

solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.

------

Pseudo Code: 

function solve(str)
    let hash = {}

    for (let c of str) 
        hash[c]++ || 1

    const values = Object.values(hash)

    if (values == 1) return true

    for (let val in values)


    
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function solve(str){
    const hash = {}

    for (let c of str) {
        hash[c] = hash[c] + 1 || 1
    }

    const values = Object.values(hash)

    if (values.length === 1) return true

    for (let i = 0; i < values.length; i++) {
        const copy = values.slice()
        copy[i] = values[i] - 1
        const filtered = copy.filter(val => val !== 0)
        
        if (filtered.every(val => val === filtered[0])) {
            return true
        }
    }

    return false
}