/*
Date of completion: 06-10-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice). 

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input. 

-----

Return:

The function should return an integer. 

-----

Examples: 

['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)

['watermelon','cherry','avocado'] // 8

['BlACKbeRrY','cOcONuT','avoCaDo'] // 8

------

Pseudo Code: 

regular <- array of regular fruit
special <- array of special fruits

reduce array to single value
    if curr is regular, add 5
    else if curr is special, add 7
    else add 9

return sum / arr.length


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function mixFruit(arr) {
    const regular = ['banana', 'orange', 'apple', 'lemon', 'grapes']
    const special = ['avocado', 'strawberry', 'mango']
    const sum = arr.reduce((sum, curr) => {
        curr = curr.toLowerCase()
         if (regular.includes(curr)) sum += 5
            else if (special.includes(curr)) sum += 7
            else sum += 9
            return sum
    }, 0)
    return Math.round(sum / arr.length)
}