/*
Date of completion: 09-09-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

We've begun receiving transmissions from Planet Gibber again after many decades of silence. Unfortunately, this time they've been all garbled up!

Luckily, linguists were able to figure out the rules of Gibberish the last time we heard from them. They've given us a guide on how to identify the actual bits of language from the random data in the strings we receive.

In order to parse the Gibberish from the... well, gibberish, we'll need to follow these rules:

    Gibberish, as we read it, only contains letters: remove all non-letter characters (including spaces)

    Gibberish is only made up of 5 letter words: separate this into words that are all 5 letters long - no trailing words with fewer than 5 letters!

    Gibberish word are all capitalised: so capitalise all the words (sort of like German nouns)

Some of the transmissions are only garbled data. If you are given an empty string or a string that doesn't contain any letters, then please return an empty string at the end.

Even if you can't read the Gibberish, that's okay as long as you've formatted it according to the language rules!

Good luck :)

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of letters and symbols

-----

Return:

A new string

-----

Example: 

cleanItUp('!!!sdfh skj!1!Kjk!jkK! jhjkhk    hj!!jh!JKKjjj  jhhH!!') returns 'Sdfhs Kjkjk Jkkjh Jkhkh Jjhjk Kjjjj'

cleanItUp('gjk ls!  !hjrfle  kaj5!395 yhos!v 32491!!29rvwnr ') returns 'Gjkls Hjrfl Ekajy Hosvr'

cleanItUp('sstoo') returns 'Sstoo'

------

Pseudo Code: 

function cleanItUp(str)
    result <- empty string
    filtered <- str without special chars and spaces

    if length of filtered is zero, return ''

    loop through filtered



--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function cleanItUp(str) {
    let result = '',
        filtered = str.toLowerCase().split('').filter(e => e.charCodeAt(0) - 96 > 0 && e.charCodeAt(0) - 96 < 27)

    if (filtered.length === 0) return ''

    let word = '' 

    for (let char of filtered) {
        word += char
        if (word.length === 5) {
            result += word[0].toUpperCase() + word.substring(1) + ' '
            word = ''
        }
    }

    return result.trim()
}