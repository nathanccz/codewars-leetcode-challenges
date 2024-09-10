/*
Date of completion: 08-10-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array. For example         arr = ['Hello','World','Codewars','Katas']  with n = 3  should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

A string

-----

Examples:

longest(['Hello','World','Codewars','Katas'],3) returns 'World'
longest(['Hello','World','Codewars','Katas'],4) returns 'Katas'
longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4) returns 'aa'
longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'],1) returns 'a'
longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1) returns 'a'

------

Pseudo Code: 

function longest(arr, n)
    return sort <- arr sorted desc by string length[n - 1]
NOTE: Sort is not stable in V8

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function longest(arr, n) {
    const hash = {}

    for (let str of arr) {
        if (!hash[str.length]) hash[str.length] = []
        hash[str.length].push(str)
    }
    
    let sorted = [],
        values = Object.values(hash).reverse()
    
    for (let entry in values) {
      for (let str of values[entry]) {
        sorted.push(str)
      }
    }
    
   return sorted[n - 1]
}