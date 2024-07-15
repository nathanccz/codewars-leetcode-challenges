/*
Date of completion: 07-14-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

Remember, the string returned should always be 26 characters long, and only count lowercase letters.

Note: You can assume that each lowercase letter will appears a maximum of 9 times in the input string.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of random characters (numbers, letters, and symbols)

-----

Return:

An ordered string, 26 places long

-----

Examples: 

decrypt('$aaaa#bbb*ccfff!z') -> '43200300000000000000000001'
decrypt('z$aaa#ccc%eee123456789') -> '30303000000000000000000001'

------

Pseudo Code: 

function decrypt(encryption)
    alphabet <- string of lower-case alphabet
    hash <- new Map

    loop through encryption string
        if hash doesn't have letter, set it with value 0
        add one for each letter

    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function decrypt(encryption) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const filtered = [...encryption].filter(e => alphabet.includes(e))
    const hash = new Map()
    let result = ''

    for (let i = 0; i < filtered.length; i++) {
        let char = filtered[i]
        if (!hash.has(char)) hash.set(char, 0)
        hash.set(char, hash.get(char) + 1)
    }

    for (let i = 0; i < 26; i++) {
        let char = filtered[i]
        if (hash.has(char)) result += +hash.get(char)
            else result += '0'
    }

    return result
}
