/*
Date of completion: 12-28-2024 
Leetcode

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of brackers

-----

Return:

A boolean

-----

Examples: 

Example 1:

Input: s = "()" // Output: true

Example 2:

Input: s = "()[]{}" // Output: true

Example 3:

Input: s = "(]" //Output: false

------

Pseudo Code: 

const isValid = function(s)
    if s.length is odd, return false

    let stack = []

    for (let c of s)
        if c is opening, stack.push(c)


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const isValid = function(s) {
    const opening = '([{'
    const closing = ')]}'
    const stack = []

    for (let c of s) {
        if (opening.includes(c)) {
            stack.unshift(c)
        } else if (opening.indexOf(stack[0]) === closing.indexOf(c)) {
            stack.shift()
        } else {
            return false
        }
    }

    return stack.length === 0
};