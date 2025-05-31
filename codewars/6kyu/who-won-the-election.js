/*
Date of completion: 05-30-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

A candidate will win this election if he has the absolute majority.

Your Task
Return the name of the winner. If there is no winner, return null / nil / None depending on the language.

Task Description
There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD". There are no spoiled ballots.

The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

A name wins the election if it gets more than n / 2 votes (n = number of all votes, i.e. the size of the given list).

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

A string or null

-----

Examples: 

getWinner(["A", "A", "A", "B", "B", "B", "A"]) returns "A"
  
getWinner(["A", "A", "A", "B", "B", "B"]) returns null
  
getWinner(["A", "A", "A", "B", "C", "B"]) returns null

------

Pseudo Code: 

function getWinner(listOfBallots)
    create targetCount variable as half listOfBallots
    create empty hash

    loop through list of Ballots
        add one to entry

    create voteCount from Object entries in hash
    
    ret

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function getWinner(listOfBallots) {
  const targetCount = Math.floor(listOfBallots.length / 2)
  const hash = {}

  for (const ballot of listOfBallots) {
    hash[ballot] = hash[ballot] + 1 || 1
  }

  const voteCount = Object.entries(hash)
  const result = voteCount.find((el) => el[1] > targetCount)

  return result ? result[0] : null
}
