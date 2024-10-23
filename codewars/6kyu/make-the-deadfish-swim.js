/*
Date of completion: 10-23-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array

Invalid characters should be ignored.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string 

-----

Return:

An array of numbers

-----

Example: 

parse("iiisdoso") => [ 8, 64 ]


------

Pseudo Code: 

function parse(data)
    let sum = 0
    return [...data].reduce((acc, curr))
        switch (curr)
            case i: sum++
            case d: sum--
            case s: sum**
            case o: acc.push(sum)
    
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function parse(data) {
    let sum = 0
    return [...data].reduce((acc, curr) => {
        switch(curr) {
            case 'i': sum++; break;
            case 'd': sum--; break;
            case 's': sum = sum**2; break;
            case 'o': acc.push(sum); break;
            default: break;
        }
        return acc
    }, [])
}
