/*
Date of completion: 03-30-2024
Codewars (Level 5 kyu)

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The Caesar cipher is a notorious (and notoriously simple) algorithm for encrypting a message: each letter is shifted a certain constant number of places in the alphabet. For example, applying a shift of 5 to the string "Hello, world!" yields "Mjqqt, btwqi!", which is jibberish.

In this kata, your task is to decrypt Caesar-encrypted messages using nothing but your wits, your computer, and a set of the 1000 (plus a few) most common words in English in lowercase (made available to you as a preloaded variable named WORDS, which you may use in your code as if you had defined it yourself).

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given a string of words that may contain upper-case letters and punctuation.

-----

Return:

The function should return primitive number (not string) no greater than 25.

-----

Examples: 

breakCaesar("DAM?") -> 7
breakCaesar("Mjqqt, btwqi!") -> 5
breakCaesar("Gur dhvpx oebja sbk whzcf bire gur ynml qbt.") -> 13

------

Pseudo Code: 

function breakCaesar(string) 
    alpha <-- 'abcdefghijklmnopqrstuvwxyz'.repeat(2)
    arr <-- string to lower case, split to array, map array that returns words without symbols
    shifts <-- empty object to store shift count for each word in arr

    for each word in arr
        count <-- 0
        while(WORD set doesn't have word)
            word <-- split word into array, map array where each letter is the previous index in alpha
            count++
        if (!shifts object has word) shifts[count] <-- 1
        shifts[count]++
    
    return key in shifts object that has the highest value, converted to number

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function breakCaesar(st){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.repeat(2)
    const arr = st.toLowerCase().split(' ').map(word => [...word].filter(l => alpha.includes(l)).join(''))
    
    let shifts = {}
    
    arr.forEach(word => {
      let count = 0
      while (!WORDS.has(word)) {
        word = word.split('').map(l => alpha[alpha.lastIndexOf(l) - 1]).join('')
        count++
      }
      if (!shifts[count]) shifts[count] = 1
      shifts[count]++
    })
    
    return +Object.keys(shifts).find(key => shifts[key] === Math.max(...Object.values(shifts)))
}