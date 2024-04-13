/*
Date of completion: 04-12-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given an array of strings. 

-----

Return:

The function should return an integer. 

-----

Examples: 

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]


------

Pseudo Code: 

function anagramCounter(words) 
    return words.reduce
        otherWords <- wordsArray.slice(ind + 1)
        anagrams <- otherWords filtered so it includes only anagrams of the current word
        total += anagrams.length
        return total


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function anagramCounter(wordsArray) {
    return wordsArray.reduce((total,curr,ind) => {
        const otherWords = wordsArray.slice(ind + 1)
        const anagrams = otherWords.filter(word => [...word].every(char => curr.includes(char)))                             
        total += anagrams.length
        return total
    }, 0)
}