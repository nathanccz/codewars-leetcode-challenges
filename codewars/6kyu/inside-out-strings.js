/*
Date of completion: 07-11-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of words

-----

Return:

A new string of words

-----

Examples: 

insideOut('man i need a taxi up to ubud') -> 'man i ende a atix up to budu'
insideOut('what time are we climbing up the volcano') -> 'hwta item are we milcgnib up the lovcona' 
insideOut('take me to semynak') -> 'atek me to mesykan' 

------

Pseudo Code: 

function insideOut(x)
    array <- x split by space

    loop through array (map it)
        if word length > 3
            turn word to array
            find middle index
            if word is odd splice the word at middle index
            slice array up to middle index, reverse, and join
            slice array from middle to end, reverse, and join
        return first + middle + second
        else return word
    return mapped array

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function insideOut(x) {
    
    const array = x.split(' ')

    return array.map(word => {
        if (word.length > 3) {
            word = word.split('')
            let middleInd = word.length / 2,
                middle = word.length % 2 !== 0 ? word.splice(Math.floor(middleInd), 1) : null,
                first = word.slice(0, middleInd).reverse().join(''),
                second = word.slice(middleInd).reverse().join('')
            return first + (middle || '') + second
        } else return word
    }).join(' ')

}