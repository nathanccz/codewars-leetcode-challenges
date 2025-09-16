/*
Date of completion: 09-16-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.

Given a string s, check whether it is beautiful.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lower-case letters

-----

Return:

A Boolean

-----

Examples: 

isBeautifulString("bbc")  should return false

isBeautifulString("bbbaa") should return false

isBeautifulString("bbbaaa") should return true

------

Pseudo Code: 

function isBeautifulString(s)
    create hashMap variable, initialized as empty object

    loop through input s
        for ever char, update by one

    create entries variable with hashMap entries, sorted alphabetically
    create currCount variable, initialized as Infinity
    create alphabet variable with lower-case alphabet string
    
    loop through entries
        if the index in alphabet is not the current entry OR entry > currCount, return false

    return true

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function isBeautifulString(s) {
  const hashMap = {}
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (const char of s) {
    hashMap[char] = hashMap[char] + 1 || 1
  }

  const entries = Object.entries(hashMap)
  const sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]))
  let currCount = Infinity

  for (let i = 0; i < sortedEntries.length; i++) {
    const [letter, count] = sortedEntries[i]

    if (alphabet[i] !== letter || count > currCount) {
      return false
    }

    currCount = count
  }

  return true
}
