/*
Date of completion: 07-13-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
    The first letter must be converted to its ASCII code.
    The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of words

-----

Return:

A new string of words, but encrypted

-----

Examples: 

encryptThis("A") -> "65"
encryptThis("A wise old owl lived in an oak") -> "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
encryptThis("The more he saw the less he spoke") -> "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"

------

Pseudo Code: 

function encryptThis(text)
    array <- text split by space

    return map through array
        ascii <- char code of word at 0 index
        second <- word at last index
        last <- word at index 1
        return ascii + second + word substring from index 1 to last + last
        //remember to join at space

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function encryptThis(text) {
    const array = text.split(' ')

    return array.map(word => {
        let ascii = word.charCodeAt(0),
            second = word[word.length - 1],
            last = word[1]
        if (word.length === 1) return ascii
            else if (word.length === 2) return ascii + second
            else return ascii + second + word.substring(2, word.length - 1) + last
    }).join(' ')

}

