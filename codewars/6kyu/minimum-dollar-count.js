/*
Date of completion: 10-08-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

https://www.codewars.com/kata/58e4d3530e1018e155000058/train/javascript

Find the minimum dollar bill's count to represent some value based on the availables bills.

You will recieve the value and an array as input (the array contains the available bills).

For instance:

minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.
3. That's all :)

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number and an array of numbers

-----

Return:

A positive integer

-----

Examples: 

minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

------

Pseudo Code: 

function minimumBillCount(value, availables)
    create result variable, initialized at 0
    sort available is descending order

    loop through sorted 


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function minimumBillCount(value, availables) {
  let result = 0
  let target = value
  const sorted = availables.sort((a, b) => b - a)

  for (const bill of sorted) {
    if (target % bill === 0) {
      result += target / bill
      return result
    } else {
      const deducted = Math.floor(target / bill)
      result += deducted
      target -= deducted * bill
    }
  }

  return result
}
