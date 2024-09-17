/*
Date of completion: 09-24-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, find the result which the little boy will get.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two positive integers

-----

Return:

A new integer (a sum of the parameters, without carrying ones)

-----

Examples: 

additionWithoutCarrying(456,1734) returns 1180

additionWithoutCarrying(99999,0) returns 99999

additionWithoutCarrying(999,999) returns 888
------

Pseudo Code: 

function additionWithoutCarrying(a,b)
    let result = ''
    bigger <- find the number with the longest length

    loop through bigger reversed
        if index i in smaller num exists
            let sum = bigger[i] + smaller[i] 
            sum > 9 ? result += sum[1] : sum 

    retirm result reversed

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function additionWithoutCarrying(a, b) {
    let result = '',
        bigger = [a, b].find(n => n === Math.max(a, b)),
        smaller = [a, b].filter(n => n !== bigger)
    
    if (smaller.length === 0) smaller = bigger
  
    let biggerStr = String(bigger).split('').reverse().join(''),
        smallerStr = String(smaller).split('').reverse().join('')
    
    for (let i = 0; i < biggerStr.length; i++) {
        if (smallerStr[i]) {
            let sum = +biggerStr[i] + +smallerStr[i]
            if (sum > 9) sum = String(sum)[1]
            result += sum
        } else result += biggerStr[i]
    }

    return +result.split('').reverse().join('')
}