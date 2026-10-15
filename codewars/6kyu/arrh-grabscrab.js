/*
Date of completion: 10-15-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string and an array of string

-----

Return:

An array of matching string(s) or an empty array if no match found

-----

Examples: 

grabscrab("hi", ["al","yhqjyoi"])// [], "Should not have found anything");
grabscrab("trisf", ["first"])// ["first"], "Should have found 'first'");
grabscrab("oob", ["bob", "baobab"])// [], "Should not have found anything");
grabscrab("ainstuomn", ["mountains", "hills", "mesa"])// ["mountains"], "Should have found 'mountains'");
grabscrab("oolp", ["donkey", "pool", "horse", "loop"])// ["pool", "loop"], "Should have found 'pool' and 'loop'");
grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])// ["sport", "ports"], "Should have found 'sport' and 'ports'");
grabscrab("ourf", ["one","two","three"])// [], "Should not have found anything");

------

Pseudo Code: 

function grabscrab(anagram, dictionary) 
    create matches variable, initialized as empty array
    create sortedAnagram variable from sorted anagram

    loop through dictionary
        create sortedWord variable from sorted element
        if sortedWord is equal to sortedAnagram
            push element to matches array

    return matches

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function grabscrab(anagram, dictionary) {
  const matches = []
  const sortedAnagram = anagram
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')

  for (const entry of dictionary) {
    const sortedWord = entry
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')

    if (sortedWord === sortedAnagram) matches.push(entry)
  }

  return matches
}
