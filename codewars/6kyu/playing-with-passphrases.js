/*
Date of completion: 06-25-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

1. shift each letter by a given number but the transformed letter must be a letter (circular shift),

2. replace each digit by its complement to 9,

3. keep such as non alphabetic and non digit characters,

4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),

5. reverse the whole result..


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string and a number

-----

Return:

A new string

-----

Examples: 

playPass("I LOVE YOU!!!", 1) returns "!!!vPz fWpM J"

playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)
    returns "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"

------

Pseudo Code: 

function playPass(str, num)
    alphabet <- string of alphabet in upper-case
    result = ''
    loop through str
        if alphabet includes char, result += alphabet[indexOf(char) + num]
        if typeof +char is 'number' result += 9 - char
        if 2 % indexOf char is 0 or NaN result += char.toUpperCase()
            else result += char.toLowerCase
    return result reversed

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use Regex.

function playPass(str, num) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (alphabet.includes(char)) {
            let shift = alphabet[(alphabet.indexOf(char) + num) % 26]
            if (i % 2 === 0) result += shift
                else result += shift.toLowerCase()
        } else if (!isNaN(+char) && char !== ' ') result += (9 - char).toString()
            else result += char
    }

    return result.split('').reverse().join('')
}