/*
Date of completion: 06-08-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of five integers, each representing a die value (1-6).

-----

Return:

A number representing the score based on the rules of the game.

-----

Examples: 

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

------

Pseudo Code: 

function score(dice)
    create a score variable initialized to 0
    create an empty object to group dice values
    for each die in dice
        increment the count of that die in the group object
    for each key in group
        get the count of that die
        switch on the key:
            if it's '1', calculate score based on count
            if it's '5', calculate score based on count
            otherwise, if count >= 3, add to score based on key value multiplied by 100
    return the total score

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function score(dice) {
  let score = 0
  const group = {}

  for (const die of dice) {
    group[die] = group[die] + 1 || 1
  }

  for (const key in group) {
    const count = group[key]

    switch (key) {
      case '1':
        if (count >= 3) {
          score += 1000 + (count - 3) * 100
        } else {
          score += count * 100
        }
        break
      case '5':
        if (count >= 3) {
          score += 500 + (count - 3) * 50
        } else {
          score += count * 50
        }
        break
      default:
        if (count >= 3) {
          score += key * 100
        }
        break
    }
  }

  return score
}
