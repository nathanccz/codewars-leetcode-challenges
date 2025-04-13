/*
Date of completion: 04-13-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.

Good luck!

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings

-----

Return:

An integer

-----

Examples: 

solve("xyz","yxz") returns 0
solve("abcxyz","ayxz") returns 2
solve("abcdexyz","yxz") returns 5

------

Pseudo Code: 

helper function to create hash map
    create Map object

    loop through string
        hash[current letter] = hash.get(curr) + 1 || 1

    return hash

function solve(a, b)
    hashA = helper(a)
    hashB = helper(b)
    let count

    loop through hashA
        if key isn't in hash b
            count += hash[A]
        else if key is in hash[b] and hash[A] >= hash[b]
            count += hash[b] - hash[a]
        else return 0

    return count   

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function createHash(str) {
  const hash = {}

  for (let char of str) {
    hash[char] = hash[char] + 1 || 1
  }

  return hash
}

function solve(a, b) {
  const hashA = createHash(a)
  const hashB = createHash(b)
  let count = 0

  for (let key in hashA) {
    if (!hashB[key]) {
      count += hashA[key]
    } else if (hashB[key] && hashA[key] >= hashB[key]) {
      count += hashA[key] - hashB[key]
    } else {
      return 0
    }
  }

  return count
}
