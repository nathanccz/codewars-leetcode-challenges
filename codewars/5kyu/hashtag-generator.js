/*
Date of completion: 04-15-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're always given a string of words that may contain empty spaces. Strings may be empty.

-----

Return:

The function should return a new string if the character count is between 0 and 141. 

-----

Examples: 

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

------

Pseudo Code: 

function generateHashtag(str)
    array <- trim string and split by space
    result <- empty string
    for each element of the array
        if the element is not an empty string, concatenate result with upper-case first letter and a substring of the remaining letters
    if the result length is 0 or greater or equal to 140 return false
        else concatenate result to '#'

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function generateHashtag(str) {
    const array = str.trim().split(' ')
    let result = ''
    array.forEach((element,index) => {
        if (element !== '') result += element[0].toUpperCase() + element.substring(1)
    })
    if (result.length === 0 || result.length >= 140) return false
        else return '#' + result
}