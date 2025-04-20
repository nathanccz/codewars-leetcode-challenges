/*
Date of completion: 04-12-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Task:

Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

Code length calculation:

In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.

    For example:

    If you typed sc=x=>x+1
    after compile, it will be:sc=function(x){return x+1;}

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of upper- and lower-case letters

-----

Return:

A new string, filtered

-----

Examples: 

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)

------

Pseudo Code: 

function sc(s)
    turn string into array
    use bitwise operator to flip the case of the current character 
    filter array to include characters whose flipped case is included in original string
    join back into string

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function sc(s) {
  return [...s]
    .filter((c) => s.includes(String.fromCharCode(c.charCodeAt(0) ^ 32)))
    .join('')
}
