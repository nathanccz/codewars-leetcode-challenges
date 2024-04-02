/*
First attempt: 04-02-2024 
Codewars Level 5 kyu*

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------
Consider the following scenario:

    You are given an array of mountains, where each element represents the height of the mountain.
    A mountain pass is defined as a subarray of the mountain array. The length of a mountain pass is the length of the subarray.
    You have an initial energy level E.
    You start at any initial index of your choice.
    Going up a mountain (i.e., moving from a lower height to a higher height) costs you energy equal to the difference in heights.
    Going down a mountain or staying at the same height does not cost you any energy.
    You can only move to the mountains on your right (i.e., the next index).

Your task is to find the longest mountain pass you can take based on your initial energy level. Return the length of the longest mountain pass and the initial index from where you should start.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We are given two parameters: an array of numbers and a single number. The length of the mountain array can reach 10^7.

-----

Return:

The function should return a new array where the first element is the longest length and the second element is the starting index. 

-----

Examples: 

longestMountainPass([10, 9, 8, 7, 6, 5, 4, 3, 2, 3], 1) -> [10, 0]
longestMountainPass([9, 1, 2, 3, 4, 5, 6, 9], 7) -> [7, 0]
longestMountainPass([1, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7) -> [9, 1]

------

Pseudo Code: 

function longestMountainPass(mountains, energy) 
    record <- empty array to store lengths for each index
    for each element of mountains
        record[index] = 0
        energyCost = 0
        for loop through subarrays
        
            if index + 1 > current element, then record[index]++
            energy -= current element - previous element
    const max < - Math.max(record)
    return [max, index of max]

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: These two solutions work for small to medium-sized arrays. Need to refactor for efficiency to handle very large arrays. 

function longestMountainPass(mountains, E) {
    const record = {}

    for (let i = 0; i < mountains.length; i++) {
        let energyCost = 0
        record[i] = 0

        for (let j = i + 1; j < mountains.length; j++) {
            record[i]++
            
            if (mountains[i] < mountains[i + 1]) {
                energyCost += mountains[i + 1] - mountains[i]
            }
            if (energyCost > E) break
        }
    }

    const result = Object.entries(record).find(entry => entry[1] === Math.max(...Object.values(record)))
    return result ? [result[1], +result[0]] : [0, 0]
}




function longestMountainPass(mountains, E) {
    const record = []
    if (mountains.length === 0) return [0, 0]
    for (let i = 0; i < mountains.length; i++) {
        let energyCost = 0
        record[i] = 0

        for (let j = i; j < mountains.length; j++) {
            record[i]++
            
            if (mountains[j] < mountains[j + 1]) {
                energyCost += mountains[j + 1] - mountains[j]
            }
            if (energyCost > E) break
        }
    }
    const max = Math.max(...record)
    
    return [max, record.indexOf(max)]
}
