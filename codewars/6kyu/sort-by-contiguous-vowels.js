/*
Date of completion: 09-12-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

A new array of strings, sorted

-----

Examples: 

sortStringsByVowels( ["high","day","boot"])  returns ["boot","high","day"]   
 
sortStringsByVowels(["none","uuu","Yuuuge!!"])  returns ["uuu","Yuuuge!!","none"]   

sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"])  returns ["GREEEN","AIBRH","YOUNG",""]

------

Pseudo Code: 
 
function sortByStrings(strings)
    let results = [],
        hash = {}
    const vowels = aeiou

    loop through strings
        add to object based on contiguous vowels

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This kata will be solved without regex.

function sortStringsByVowels(strings) {
    const vowels = 'aeiouAEIOU'
    const countVowels = str => {
        let ind = 0, array = []

        for (let char of str) {
            if (!array[ind]) array[ind] = []
            if (vowels.includes(char)) {
                array[ind].push(str)
            } else ind++
        }

        return Math.max(...array.map(e => e.length))
    }

    return strings.slice().sort((a, b) => countVowels(b) - countVowels(a))
}
