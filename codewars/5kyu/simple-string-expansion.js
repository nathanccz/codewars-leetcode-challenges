/*
Date of completion: 03-31-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Consider the following expansion:

solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.

Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given a string that represents the expression we want our function to evaluate. Strings will not be empty. 

-----

Return:

The function should return a new string.

-----

Examples: 

solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.

------

Pseudo Code: 

function solve(string)
    array <- string.split
    copy <- string

    while(copy contains parens)
        start <- copy.lastIndexOf("(")
        end <- copy.substring(start).indexOf(')') + copy.substring(0, start).length
        substr <- copy.substring(start + 1, end)

        if (the char before the first parent is a Number)
            copy <- copy.replace(copy.substring(start - 1, end + 1), subString.repeat(+copy[start - 1]))
        else copy < copy.replace(copy.substring(start, end + 1), subString)
    
    return copy

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function solve(str) {

    let copy = str

    while([...copy].some(el => "()".includes(el))) {
        
        const start = copy.lastIndexOf("(")
        const end = copy.substring(start).indexOf(')') + copy.substring(0, start).length
        const subString = copy.substring(start + 1, end)
    
        if (!isNaN(+copy[start - 1])) {
            copy = copy.replace(copy.substring(start - 1, end + 1), subString.repeat(+copy[start - 1]))
            
        } else {
            copy = copy.replace(copy.substring(start, end + 1), subString)
            
        }
    }
    return copy
}