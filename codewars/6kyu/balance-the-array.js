/*
Date of completion: 07-10-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Check that the two provided arrays both contain the same number of different unique items, regardless of order.

For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]

Both arrays have four of one item and two of another, so balance should return true.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two arrays of strings

-----

Return:

A Boolean

-----

Examples: 

let array1 = ["a","a","a","a","a","b","b","b"],
    array2 = ["c","c","c","c","c","d","d","d"];
  Test.assertEquals(balance(array1, array2), true);
    array1 = ["a","a"],
    array2 = ["c"];
  Test.assertEquals(balance(array1, array2), false);
    array1 = ["a","b","c","d","e","f","g","g"];
    array2 = ["h","h","i","j","k","l","m","n"]; 
  Test.assertEquals(balance(array1, array2), true);
    array1 = ["a"];
    array2 = ["c"];

------

Pseudo Code: 

function balance(arr1, arr2)
    function expression that creates map from array
    arrayOne: run function from above and turn to array of entries
    arrayTwo: ''
    return arrOne.every element

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function balance(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    const reduceArr = arr => {
        arr.reduce((acc, curr) => {
            if (!acc.includes(curr)) acc.push([curr, 0])
            acc.find(e => e.includes(curr))[1]++
        }).sort((a, b) => a[1] - b[1])
    }

    const arrayOne = reduceArr(arr1)
    const arrayTwo = reduceArr(arr2)

    return arrayOne.every((e, i) => e[1] === arrayTwo[i][1])
}