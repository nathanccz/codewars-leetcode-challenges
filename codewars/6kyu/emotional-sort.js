/*
Date of completion: 08-16-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad

Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings containing emoticons

-----

Return:

A new array of strings, sorted

-----

Example: 

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]

------

Pseudo Code: 

function sortEmotions(arr, order)
    const emoticons = [ ':D', ':)', ':|', ':(', 'T_T' ]

    return order ? sort emoticons from a - b else sort b - a

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use regex. 

function sortEmotions(arr, order) {
    const emoticons = [ ':D', ':)', ':|', ':(', 'T_T' ]
    
    return order ? arr.sort((a, b) => emoticons.indexOf(a) - emoticons.indexOf(b)) : 
                   arr.sort((a, b) => emoticons.indexOf(b) - emoticons.indexOf(a))
}