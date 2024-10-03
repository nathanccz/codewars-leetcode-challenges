/*
Date of completion: 07-10-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings

-----

Return:

A new string 

-----

Examples: 

findAdded('4455446', '447555446666'); // '56667'
findAdded('44554466', '447554466'); // '7'
findAdded('9876521', '9876543211'); // '134'
findAdded('678', '876'); // ''
findAdded('678', '6'); // ''

------

Pseudo Code: 

function findAdded(st1, st2)
    copy st2
    loop through str1
        copy.replace(char, '')
    return copy split to array, sorted, joined


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function findAdded(st1, st2){
    let copy = st2

    for (let num of st1) {
        copy.replace(num, '')
    }

    return copy.split('').sort((a, b) => a - b).join('')
}