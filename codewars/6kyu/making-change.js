/*
Date of completion: 04-04-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Making Change

Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in in other languages)

The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given a single number representing the total cents to make change with. 

-----

Return:

The function should return a new object with lettered keys and a number value representing quantity (not currency value).

-----

Examples: 

makeChange(0)   //-->  {}
makeChange(1)   //-->  {"P":1}
makeChange(43)  //-->  {"Q":1, "D":1, "N":1, "P":3}
makeChange(91)  //-->  {"H":1, "Q":1, "D":1, "N":1, "P":1}


------

Pseudo Code: 

function makeChange(amount) 
    hash <- object containing coin keys with their associated currency value
    result <- empty object to return 

    while (amount) 
        highest <- highest coin value less than or equal to the current amount
        if (result obj doesn't contain highest key), set it to zero
        result[highest]++
        amount -= hash[highest]

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const makeChange = (amount) => {
    const hash = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1}
    let result = {}
    
    while (amount) {
      const highest = Object.keys(hash).find(key => hash[key] <= amount)
      if (!result[highest]) result[highest] = 0
      result[highest]++
      amount -= hash[highest]
    }
    
    return result 
}