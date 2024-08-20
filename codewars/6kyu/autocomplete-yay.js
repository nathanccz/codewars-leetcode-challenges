/*
Date of completion: 08-21-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string and an array of srtings

-----

Return:

A new array of strings

-----

Example: 

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

------

Pseudo Code: 

function autocomplete(input, dictionary)
    cleanInput <- input with special characters filtered out and lower cased
    result <- empty array

    loop through dictionary
        let word <- curr to lower case
        if substring of word === cleanInput, push curr to result

    return result


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function autocomplete(input, dictionary) {
    let cleanInput = input.split('')
                          .filter(e => e.charCodeAt(0) - 96 > 0 && e.charCodeAt(0) - 96 < 27)
                          .join(''),
        result = []
    
    for (let word of dictionary) {
        let lowercase = word.toLowerCase()
        if (lowercase.substring(0, cleanInput.length) === cleanInput) result.push(word)
    }

    return result
}