/*
Date of completion: 04-19-2024
Codewars Level 5

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.
Task:

Return an array with

        the smallest number you got
        the index i of the digit d you took, i as small as possible
        the index j (as small as possible) where you insert this digit d to have the smallest number.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given a single positive integer. 

-----

Return:

The function should return an array with the smallest number, the index of the digit taken out, and the index of where it was inserted. 

-----

Examples: 

smallest(261235) --> [126235, 2, 0]
smallest(209917) --> [29917, 0, 1]
smallest(285365) --> [238565, 3, 1]

------

Pseudo Code: 

function smallest(n)
    array <- array from n to string
    cache <- empty object

    for each num of array
        create index in cache to hold all num variations
        for each number in array
            create new number with the current num shifted
            push the new num

    return the minimum number in Object.values(cache), first index of array that contains the minimum number, and the index of that array that holds the minimum number


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function smallest(n) {
    const array = [...String(n)].map(num => +num)
    const cache = {}
    
    array.forEach((num,ind,arr) => {
        if (!cache[ind]) cache[ind] = []
        for (let i = 0; i < arr.length; i++) {
            const copy = [...String(n)].filter(((_, index) => index !== ind))
            const splicer = copy.splice(i, 0, num).join('')
            newNum = +copy.join('')
            cache[ind].push(newNum)
        }
    })

    const result = Object.values(cache)
    const allMins = result.map((key, ind) => Math.min(...key))
    const absMin = Math.min(...allMins)
    const row = result.findIndex(key => key.includes(absMin))
    
    return [absMin, row, result[row].indexOf(absMin)]
}
