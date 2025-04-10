/*
Date of completion: 04-10-2025
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given string s, which contains only letters from a to z in lowercase.

A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.

2 sets of alphabets mean 2 or more alphabets.

Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.

If the string contains all of the letters in the alphabet, return an empty string ""

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lowercase letters

-----

Return:

A string of missing letters in alphabetical order 

-----

Examples: 

missingAlphabets("abcdefghijklmnopqrstuvwxyz")returns ""

missingAlphabets("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy")returns "zz"

missingAlphabets("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy")returns "ayzz"

------

Pseudo Code: 

function missingAlphabets(s)
    create empty object as hash
    create result variable with empty string

    loop through string
        -> store character count in hash

    find max count in hash

    loop through hash 
        if a key has a value less than max count
            -> repeat the key by max count - value

    return result


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function missingAlphabets(s) {
  const hashMap = {}
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (char of s) {
    hashMap[char] = hashMap[char] + 1 || 1
  }

  const maxCount = Math.max(...Object.values(hashMap))

  for (let letter of alphabet) {
    const value = hashMap?.[letter]

    if (value && value < maxCount) {
      result += letter.repeat(maxCount - value)
    } else if (!value) {
      result += letter.repeat(maxCount)
    }
  }

  return result
}
