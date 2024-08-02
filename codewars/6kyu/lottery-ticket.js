/*
Date of completion: 08-02-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of two-value arrays and a number

-----

Return:

A string value of 'Loser!' or 'Winner!'

-----

Examples: 

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) -> 'Loser!'

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) -> 'Winner!'

bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3) -> 'Loser!'


------

Pseudo Code: 

function bingo(ticket, win)
    let score = ticket reduced
        isWinner = false
        loop through curr[0]
            if char code of character equals curr[1]
                add isWinner = true
        if isWinner is true, add 1 to sum
        return sum

    return score >= win ? 'winner' : 'loser'

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function bingo(ticket, win) {
    const score = ticket.reduce((sum, curr) => {
        let string = [...curr[0]]
        for (let letter of string) {
            if (letter.charCodeAt(0) === curr[1]) {
              sum++
              break
            }
        }
        return sum
    }, 0)
    
    return score >= win ? 'Winner!' : 'Loser!'
}

