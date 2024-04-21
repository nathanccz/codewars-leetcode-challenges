/*
Date of completion: 04-20-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are given an array a of positive integers and an intger k. You may choose some integer X and update a several times, where to update means to perform the following operations:

pick a contiguous subarray of length not greater than the given k;
replace all elements in the picked subarray with the chosen X.

What is the minimum number of updates required to make all the elements of the array the same?

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given an array of positive integers. Arrays, including their elements, will be never be empty. 

-----

Return:

The function should return a positive integer. 

-----

Examples: 

arrayEqualization([1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1], 2) --> 4

arrayEqualization([5, 2, 3, 5, 2, 2, 3, 5, 1, 2, 5, 1, 2, 5, 3], 7) --> 2

arrayEqualization([1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1], 9) --> 1

------

Pseudo Code: 

function arrayEqualization(arr, k) 
    uniques <- array of all unique numbers in arr
    copy <- copy of arr
    results <- empty array
    count <- records how many iterations it takes to fill up copy with same number
    for each number in uniques
        find index of first number that is not current number
            while every number in the copy is current unique number
                for each increment up to k
                    copy[index + increment] = current number in uniques
            count++
        push count to results
        set count to 0
        reassign array copy to original array
    return minimum value in result array

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
function arrayEqualization(a, k) {
    const uniques = a.filter((n, i, arr) => arr.indexOf(n) === i)
    let copy = a.slice(), count = 0, results = []

    for (let i = 0; i < uniques.length; i++) {
        while (!copy.every(n => n === uniques[i])) {
            const index = copy.findIndex(n => n !== uniques[i])
            for (let j = 0; j < k; j++) {
                copy[index + j] = uniques[i]
            }
            count++
        }
        results.push(count)
        count = 0
        copy = a.slice()
    }
  
    return Math.min(...results)
}
