/*
Date of completion: 10-22-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array of integers arr, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Array of positive integers

-----

Return:

An integer

-----

Examples: 

For arr = [22, 111, 101, 124, 33, 30], the output should be 124

For arr = [1111, 404], the output should be -1.

------

Pseudo Code: 

function function differentDigitsNumberSearch(arr) {

    loop through each num of arr
        convert num to string, split into array
        create new Set from array

        if the set size equals the array length return num

    return -1

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function differentDigitsNumberSearch(arr) {
  
    for (let num of arr) {
      let numToArr = num.toString().split(''),
          filtered = new Set(numToArr)
      
      if (filtered.size === numToArr.length) return num       
    }
    
    return -1
}