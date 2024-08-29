/*
Date of completion: 08-29-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string

-----

Return:

A new encoded string

-----

Examples: 

encode('hello') returns 'h2ll4'
encode('How are you today?') returns 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.') returns 'Th3s 3s 1n 2nc4d3ng t2st.'
   

------

Pseudo Code: 

function encode (string)
    const vowels = aeiou
    return string split, then mapped
        if vowels includes letter return vowels index + 1
            else return letter

function decode(string)
    const vowels = aeiou
    return string split, then mapped
        if e is a number, return vowels[index + 1]
            else return letter

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function encode(string) {
    const vowels = 'aeiou'

    return [...string].map(char => vowels.includes(char) ? vowels.indexOf(char) + 1 : char)
}

function decode(string) {
    const vowels = 'aeiou'

    return [...string].map(char => !isNaN(+char) ? vowels[char - 1] : char)
}