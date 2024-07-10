/*
Date of completion: 07-08-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string

-----

Return:

A new string with cases intact

-----

Examples: 

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

------

Pseudo Code: 

function reverseVowels(str)
    vowels <- vowels lower and uppercase
    result <- ''
    inputVowels <- store vowels from str to reverse
    loop through str
        if vowels includes letter, push letter input vowels
    inputVowels.reverse
    loop through str
        if vowels includes letter, result += inputVowels[0]
        else result += str[i]
    return result
    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function reverseVowels(str) {
    const vowels = 'aeiouAEIOU'
    const inputVowels = [...str].filter(l => vowels.includes(l))
    let result = '' 

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) result += inputVowels.pop()
            else result += str[i]
    }

    return result
}

