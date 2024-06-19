/*
Date of completion: 06-19-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

What's in a name?

...Or rather, what's a name in? For us, a particular string is where we are looking for a name.

Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings

-----

Return:

A Boolean value

-----

Examples: 

"Across the rivers", "chris" --> true

"Next to a lake", "chris" --> false

"Under a sea", "chris" --> false

"A crew that boards the ship", "chris" --> false

------

Pseudo Code: 

function nameInStr(str, name)

    let result = ''
        index = 0 (to keep track of name substring)
        str, name to lower case

    for loop through str
        if name includes letter 
            result += letter
            index++
        if result === name return true
    
    return false

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function nameInStr(str, name) {
    let result = '', 
        index = 0, 
        str = str.toLowerCase(), 
        name = name.toLowerCase()
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === name.substring(index)[0]) {
            result += str[i]
            index++
        }
        if (result === name) return true
    }
  
    return false
}