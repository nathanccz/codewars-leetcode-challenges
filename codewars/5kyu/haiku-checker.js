/*
Date of completion: 09-26-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Haikus are short poems in a three-line format, with 17 syllables arranged in a 5–7–5 pattern. Your task is to check if the supplied text is a haiku or not.

About syllables:
Syllables are the phonological building blocks of words. In this kata, a syllable is a part of a word including a vowel ("a-e-i-o-u-y") or a group of vowels (e.g. "ou", "ee", "ay"). A few examples: "tea", "can", "to·day", "week·end", "el·e·phant".

However, silent "E"s do not create syllables. In this kata, an "E" is considered silent if it's alone at the end of the word, preceded by one (or more) consonant(s) and there is at least one other syllable in the word. Examples: "age", "ar·range", "con·crete"; but not in "she", "blue", "de·gree".

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string

-----

Return:

A Boolean

-----

Examples: 

isHaiku(`\
An old silent pond...
A frog jumps into the pond,
splash! Silence again.`) returns true

isHaiku(`\
Autumn moonlight -
a worm digs silently
into the chestnut.`) returns false );

isHaiku("") returns false

isHaiku(`\
My code is cool, right?
Java # Python ; Ruby // Go:
I know them all, yay! ;-)`) returns true

isHaiku(`\
An old silent pond...
A frog jumps into the pond, splash!
Silence again.`) returns false

------

Pseudo Code: 

function isHaiku(text)
    create first, second and third line variables by splitting text by \n

    return countSylllables(first) === 5 AND countSyllables(second) === 7 AND countSyllables(third) === 5
       
function countSyllables(line)
    create vowels variable
     split line into separate words and strip special characters or short the loop on special chars
        create syllables variable as a counter

        loop through letters (for loop)
            if letter is a vowel and the next char exists and isn't a vowel
                add one to syllables 

        return syllables
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
//NOTE: This challenge will be solved without regex.

function isHaiku(text) {
  const [first, second, third] = text.split('\n')

  return (
    countSyllables(first) === 5 &&
    countSyllables(second) === 7 &&
    countSyllables(third) === 5
  )
}

function countSyllables(line) {
  const isVowel = (char) => 'AEIOUaeiouy'.includes(char)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const words = line.split(' ')
  let total = 0

  for (const word of words) {
    const curr = word
      .split('')
      .filter((c) => alphabet.includes(c.toLowerCase()))
      .join('')

    for (let i = 0; i < curr.length; i++) {
      if (isVowel(curr[i]) && !isVowel(curr[i + 1])) {
        if (
          curr[i] === 'e' &&
          !curr[i + 1] &&
          !isVowel(curr[i - 1]) &&
          curr
            .substring(0, curr.length - 1)
            .split('')
            .some((c) => isVowel(c))
        )
          break

        total++
      }
    }
  }

  return total
}
