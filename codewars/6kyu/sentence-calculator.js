/*
Date of completion: 05-20-2025 
Codewars Level 6 kyu*

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

1. Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
2. Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
3. Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
4. Other characters: 0 value

Note: input will always be a string

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

string of letters and numbers  

-----

Return:

a number

-----

Example: 

tester("ARE YOU HUNGRY?", 356);
tester("oops, i did it again!", 152);
tester("Give me 5!", 73);

------

Pseudo Code: 

function lettersToNumbers(s)
    initialize alphabet variable
               score variable

    loop through string

        switch (char)
            case alphabet.includes(char)

    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function lettersToNumbers(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let score = 0

  for (let char of s) {
    const lowerCase = char.toLowerCase()

    if (alphabet.includes(lowerCase)) {
      const position = alphabet.indexOf(lowerCase) + 1

      if (lowerCase === char) {
        score += position
      } else {
        score += position * 2
      }
    } else if (!isNaN(Number(char))) {
      score += Number(char)
    }
  }

  return score
}
