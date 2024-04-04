/*
Date of completion: 04-03-2024 
Codewars Level 6 kyu*

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Calculate the cost of a shopping list by writing a function. The function takes an argument which is an array consisting of sub-arrays. For example:

shoppingListCost([["Orange Juice", 2],["Chocolate", 4],["Pears", 8]]) 

The input array includes sub arrays containing the name and quantity of each item being purchased. Already existing in the global scope is an object which gives some information regarding the shopping items:

var groceries = {
  "Orange Juice": {
      "price" : 1.5,
      "discount": 10, 
      "bogof": false
  },
    
  "Chocolate": {
      "price" : 2,
      "discount" : 0,
      "bogof": true
  },
  
  // more items...
}
  

This object contains the price of the item, the discount currently being offered on that item, and whether the item is currently "buy one get one free" (meaning for every item purchased, one of the same item is free).

Return the cost of the shopping list. If the input array contains no items, return zero. Round the answer to 2 decimal places.

All input arrays will be valid and contain items included in the global groceries object. Each item will only appear once in any input array. 

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given an array of subarrays, and each subarray contains a string and a number. 

-----

Return:

The function should return a float rounded up to two decimal places. 

-----

Examples: 

shoppingListCost([["Orange Juice", 2],["Chocolate", 4]]) returns 6.7
shoppingListCost([["Chocolate", 5],["Orange Juice", 15]]) returns 26.25

------

Pseudo Code: 

function shoppingListCost(arr)
    return +arr.reduce
        [item, qty] <- curr
        price <- groceries[item]["price"] - price * (groceries[item]["discount"]/100)
        (!groceries[item]["bogof"]) ? sum + price * qty : sum + price * Math.ceil(qty/2)
        .toFixed(2)

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function shoppingListCost(arr) {
    return +arr.reduce((sum, curr) => {
      const [item, qty] = curr
      const price = groceries[item]["price"] - groceries[item]["price"] * (groceries[item]["discount"]/100)
      return (!groceries[item]["bogof"]) ? sum + price * qty : sum + price * Math.ceil(qty/2)
    }, 0).toFixed(2)
  }