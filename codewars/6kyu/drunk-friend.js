/*
Date of completion: 07-26-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak, and when he wants to say something, he writes it down on a paper. However, none of the words he writes make sense to you. He wants to help you, so he points at a beer and writes "yvvi". You start to understand what he's trying to say, and you write a script, that decodes his words.

Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are. You should also test if the input is a string. If it is not, return "Input is not a string".

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of encrypted words

-----

Return:

A new string of decrypted words

-----

Examples: 

decode("yvvi") -> "beer"

decode("Blf zoivzwb szw 10 yvvih") -> "You already had 10 beers"

decode("Ovg'h hdrn rm gsv ulfmgzrm!") -> "Let's swim in the fountain!"

decode("Tl slnv, blf'iv wifmp") -> "Go home you're drunk" 

------

Pseudo Code: 

function decode(str)
    if (typeof str !== 'string') return 'Input is not a string'
    result = ''

    loop through string
        if charcode is between 0 and 27
            string from charcode (27 - charcode + 96)
    
    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function decode(str) {
    if (typeof str !== 'string') return 'Input is not a string'

    let result = ''

    for (let i = 0; i < str.length; i++) {
        let ordinal = str[i].toLowerCase().charCodeAt(0) - 96
        if (ordinal > 0 && ordinal < 27) {
            let decrypted = String.fromCharCode(27 - ordinal + 96)
            result += str[i] === str[i].toUpperCase() ? decrypted.toUpperCase() : decrypted
        } else result += str[i]
    }

    return result
}