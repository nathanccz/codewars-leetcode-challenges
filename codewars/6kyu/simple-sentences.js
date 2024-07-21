/*
Date of completion: 07-21-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

    words;
    commas in the middle;
    multiple periods at the end.
    
Sentence making rules:

    there must always be a space between words;
    there must not be a space between a comma and word on the left;
    there must always be one and only one period at the end of a sentence.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

A new string of words

-----

Examples: 

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
makeSentence(['hello', 'world']) // returns 'hello world.'

------

Pseudo Code: 
 
function makeSentence(parts)
    result <- parts[0]

    loop through parts starting at index one
        if part is a comma, concatenate to result as is
            else concatenate to result with space in front
    
    return result + '.'


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This kata will be solved without regex.

function makeSentence(parts) {
    let result = parts[0]

    for (let i = 1; i < parts.length; i++) {
        if (parts[i] === ',') result += ','
            else if (parts[i] !== '.') result += ' ' + parts[i]
            else break
    }

    return result + '.'
}
