/*
Date of completion: 02-25-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array arr and a number n. Call a pair of numbers from the array a Perfect Pair if their sum is equal to n.

Find all of the perfect pairs and return the sum of their indices.

Note that any element of the array can only be counted in one Perfect Pair. If there are multiple correct answers, return the smallest one.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of non-negative integers and a positive integer

-----

Return:

A number representing the sum of indices. 0 if no Perfect Pair exists.

-----

Examples: 


Test.assertEquals(pairwise([1, 4, 2, 3, 0, 5],7),11)

Test.assertEquals(pairwise([1, 3, 2, 4],4),1)

Test.assertEquals(pairwise([1, 1, 1],2),1)

------

Pseudo Code: 
 
function pairwise(arr, n)
    let result = 0
    store seen nums in hash
    copy = copy of arr

    loop through arr
        const target = n - curr
        if (hash[n - num] && hash[n - num].length > 0)
            result += hash[target] + current index
        
        if (!hash[num]) {
            hash[num] = []
        }
        
        hash[num].push(i)

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function pairwise(arr, n) {
    let result = 0;
    const hash = {};

    arr.forEach((num, i) => {
        if (hash[n - num] && hash[n - num].length > 0) {
            result += hash[n - num].shift() + i; 
        } else {
            if (!hash[num]) {
                hash[num] = [];
            }
            hash[num].push(i); 
        }
    });

    return result;
}



