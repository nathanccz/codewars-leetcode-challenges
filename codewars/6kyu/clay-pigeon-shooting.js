/*
Date of completion: 08-11-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

For each round you will receive the following format:

[{P1:'XX', P2:'XO'}, true]

That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

Note that as there are three rounds, the actual input (x) will look something like this:

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array with three elements, each containing two objects and a Boolean

-----

Return:

A new string indicating the results of the game
-----

Examples: 

shoot([[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]) returns 'Pete Wins!'

shoot([[{P1:'XX', P2:'XO'}, false], [{P1:'OX', P2:'XX'}, false], [{P1:'OO', P2:'XX'}, true]]) returns 'Phil Wins!'); 

shoot([[{P1:'XX', P2:'XX'}, true], [{P1:'XX', P2:'OX'}, false], [{P1:'OO', P2:'OX'}, true]]) returns 'Phil Wins!'


------

Pseudo Code: 

function shoot(x)
    let peteScore = 0
        philScore = 0

    loop through x array
        let P1 

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function shoot(x){
    let peteSum = 0,
        philSum = 0

    const findXs = str => str.split('').filter(e => e === 'X').length

    x.forEach(round => {
        let scores = round[0],
            multiplier = round[1],
            [peteScore, philScore] = [findXs(scores.P1), findXs(scores.P2)]
      
        if (multiplier) {
            peteScore *= 2
            philScore *= 2
        }

        peteSum += peteScore
        philSum += philScore
    })

    return peteSum > philSum ? 'Pete Wins!' : 
           philSum > peteSum ? 'Phil Wins!' : 'Draw!'
}