/*
Date of completion: 01-20-2025 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number representing the amount of money to withdraw

-----

Return:

An array of numbers representing the amount of 100, 50 and 20 dollar bills

-----

Examples: 

For n = 250, the result should be [2, 1, 0].

For n = 260, the result should be [2, 0, 3].

For n = 370, the result should be [3, 1, 1].

------

Pseudo Code: 

function withdraw(n)
    let result = [0, 0, 0],
        withdrawal = n

        if withdrawal >= 100
            withdrawal -= 100
            result[0]++
            else if withdrawal >= 50
                if withdrawal - 50 % 20 === 0
                    result[1]++
                    withdrawal -= 50
            else 
                result[1] += withdrawal / 20
                withdrawal = 0

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function withdraw(n) {
    let result = [0, 0, 0],
        withdrawal = n

    if (withdrawal >= 100) {
        let numBills = Math.floor(withdrawal / 100),
            rest = withdrawal - 100 * numBills

        if (rest < 50 && rest % 20 !== 0) {
            numBills--
        }

        result[0] = numBills
        withdrawal -= 100 * numBills
    }

    if (withdrawal >= 50) {
        let numBills = Math.floor(withdrawal / 50),
            rest = withdrawal - 50 * numBills
        
        if (rest % 20 !== 0) {
            numBills--
        }
        
        result[1] = numBills
        withdrawal -= 50 * numBills
    }
   
    result[2] += withdrawal / 20

    return result
}