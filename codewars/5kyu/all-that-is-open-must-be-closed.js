/*
Date of completion: 04-14-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Background:

We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

Kata:

Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

You must determine if all that is open is then closed, and nothing is closed which is not already open!

You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

You may assume that the second string always has an even number of characters.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

NOTE: This challenge will be solved without using RegExp.

Parameters:

We're given two strings, neither of which will be empty.

-----

Return:

The function should return a Boolean value.

-----

Examples: 

// In this case '(' opens a section, and ')' closes a section
isBalanced("(Sensei says yes!)", "()")       // => True
isBalanced("(Sensei says no!", "()")         // => False

// In this case '(' and '[' open a section, while ')' and ']' close a section
isBalanced("(Sensei [says] yes!)", "()[]")   // => True
isBalanced("(Sensei [says) no!]", "()[]")    // => False

// In this case a single quote (') both opens and closes a section
isBalanced("Sensei says 'yes'!", "''")       // => True
isBalanced("Sensei say's no!", "''")         // => False


------

Pseudo Code: 

function isBalanced(s, caps)
    symbols <- s filtered to show only symbols
    pairs <- array of symbol pairs (opening and closing)
    if pairs.length is odd, return false

    results <- empty array, iterator = 0

    while (symbols length > 0)
        end <- find index in symbols where we see the first closing symbol
        results[iterator] = symbols.splice(end - 1, 2)
        iterator++

    return true if there are not items in results that are not found in the caps string
    
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function isBalanced(s, caps) {
    const symbols = [...s].filter(char => caps.includes(char))
    const pairs = caps.match(/.{1,2}/g)
    if (symbols.length % 2 !== 0) return false
  
    let results = [], iterator = 0
    
    while (symbols.length > 0) {
        const end = symbols.findIndex(symbol => pairs.some(pair => pair[1] === symbol))
        results[iterator] = symbols.splice(end - 1, 2)
        iterator++
    }
  
    return !results.some(result => !caps.includes(result.join('')))
}