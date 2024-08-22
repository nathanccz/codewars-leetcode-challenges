/*
Date of completion: 08-22-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Gary likes pictures but he also likes words and reading. He has had a desire for a long time to see what words and books would look like if they could be seen as images.

For this task you are required to take a continuous string that can consist of any combination of words or characters and then convert the words that make up this string into hexadecimal values that could then be read as colour values.

A word is defined as a sequence of ASCII characters between two white space characters or the first or last word of a sequence of words.

Each word will represent a hexadecimal value by taking the first three letters of each word and find the ASCII character code for each character. This will then give you one hexadecimal value that represents the colours red, green or blue. You will then combine these values into one readable RGB hexadecimal value, e.g. #ffffff.

If your word consists of less than 3 letters, you should use the hexidecimal value 00, ie "It" would return a value #497400.

Your answer should be an array of hexadecimal values that correspond to each word that made up your original string.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of words that can include special characters

-----

Return:

An array of strings representing hex values

-----

Example: 

The following string would be given:

"Hello, my name is Gary and I like cheese."

This string would return the following array:

['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']

------

Pseudo Code: 

function wordsToHex(words)
    let array = words split by space
        result = empty array

    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function wordsToHex(words) {
    let array = words.split(' '),
        result = []

    for (let word of array) {
        let substring = word.substring(0, 3),
            rgbs = substring.split('').map(e => e.charCodeAt(0)),
            hexes = rgbs.map(e => Math.floor(e / 16).toString(16) + (e % 16).toString(16)).join('')

        result.push(`#${hexes.padEnd(6, '0')}`)
    }

    return result
} 

