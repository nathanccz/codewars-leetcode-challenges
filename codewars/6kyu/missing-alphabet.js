/*
Date of completion: 04-22-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lower case letters

-----

Return:

A new string of lower and upper case letters

-----

Example: 

input: "holly"

missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"
   
------

Pseudo Code: 

function insertMissingLetters(str)
    define variable containing alphabet as array
    define "seen" hash with empty object
    result = ''

    loop through str
        if char is not in "seen"
            set char in "seen" to true
            define missing letters
                const targetInd = find index of letter in alphabet
                missingLetters = alphabet sliced at target then filtered
            result += char + missingletters joined, to upper case

    return result


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function insertMissingLetters(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const seenLetters = {}
  let result = ''

  for (let char of str) {
    if (!seenLetters[char]) {
      seenLetters[char] = true
      const targetInd = alphabet.findIndex((l) => l === char)
      const missingLetters = alphabet
        .slice(targetInd + 1)
        .filter((l) => !str.includes(l))
      result += char + missingLetters.join('').toUpperCase()
    } else {
      result += char
    }
  }

  return result
}
