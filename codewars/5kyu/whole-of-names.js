/*
Date of completion: 04-18-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Create a function hallOfFame(players) which return an ordered list of sub-arrays of players with same score.

Important

In case of equality in first places, next ones will be moved. It means :

    If 2 players share the 1st rank, next one(s) move to 3rd rank.
    If more than 2 players share the 1st rank other players can't figure on the podium.
    If there is only one "1st player" but more than one "2d players" then "3rd" rank is inoccupied.

In these cases "empty" ranks should figure in returned array as empty sub-arrays : [ [123,"Xin","Yang","Zhu"], [], [] ]

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given an array of plays, each player is a 2-items array of the form [name, score].

-----

Return:

The function should return a new array.

-----

Examples: 

hallOfFame(["Aya",9], ["Ben",9], ["Clo",9], ["Dan",8.99])
  // -> [ [9, "Aya", "Ben", "Clo"], [], [] ] : 3 players on 1st place no 2nd nor 3rd rank allowed)
  
hallOfFame(["Aya",9], ["Ben",9], ["Clo",8], ["Dan",7.99])
  // -> [ [9,"Aya","Ben"], [], [8,"Clo"]  ] : 2 players on 1st place -> "2nd" score goes to 3rd rank
  
hallOfFame(["Aya",9], ["Ben",8], ["Clo",8], ["Dan",7.99])
  // -> [ [9,"Aya"], [8,"Ben","Clo"], []  ] : 1 "1st player", 2 "2nd players" -> no place for the 3rd
  
hallOfFame(["Aya",9], ["Ben",8], ["Clo",7], ["Dan",6.99])
  // -> [ [9,"Aya"], [8,"Ben"], [7,"Clo"]  ] :  each first places occupied by only 1 player


------

Pseudo Code: 

function hallOfFame(players)
    rankings <- [], rankCount <- 0, scores <- {}

    for each player of players
      score <- second array item
      name <- first array item
      if the score doesn't exist in scores object, set it to []
      push name into score array in scores

    const topThree <-
      scores entries sorted by highest score, then mapped so every score is a number and names are sorted alphabetically, then flatten array
      filter array to show top three entries

    for each entry in topThree
      if the rank count is less than three
        push entry to rankings
        add entry length - 1 to rankCount
      else
        push an empty array to rankings

    if the first item in rankings contains two players (i.e., its length is three), the return a sorted array with the empty array in the middle
      else return rankings as is


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function hallOfFame(players) {
  let rankings = [], rankCount = 0, scores = {}

  players.forEach(player => {
      const score = player[1]
      const name = player[0]
      if (!scores[score]) scores[score] = []
      scores[score].push(name)
  })

  const topThree = 
  Object.entries(scores).sort((a,b) => b[0] - a[0])
                        .map(score => [+score[0], score[1].sort((a,b) => a.localeCompare(b))].reduce((flat,curr) => flat.concat(curr), []))
                        .filter((_,ind) => ind < 3)

  topThree.forEach(entry => {
      if (rankCount < 3) {
          rankings.push(entry)
          rankCount += entry.length - 1
      } else rankings.push([])
  })

  return rankings[0].length === 3 ? [rankings[0], rankings[2], rankings[1]] : rankings
}


