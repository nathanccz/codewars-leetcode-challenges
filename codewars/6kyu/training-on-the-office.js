/*
Date of completion: 07-20-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Arrays with the number of occupants as string of X's and a number of available chairs, as well as a number of chairs needed

-----

Return:

An array of numbers indicating how many chairs you've taken from an array, which should add up to the "chairs needed" parameter

If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!"

-----

Examples: 

[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

------

Pseudo Code: 

function meeting(x, need)
    result <- empty array
    let taken <- stores the number of chairs taken 

    loop through x array
        if second element is greater than first element length
            push the minimum of need minus taken / second element minus first element length
        if taken === need, break

    return result 

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function meeting(x, need) {
    if (need === 0) return 'Game On'

    let result = [],
        taken = 0

    for (let room of x) {
        let occupants = room[0].length,
            available = room[1]

        if (available > occupants) {
            result.push(Math.min(available - occupants, need - taken))
            taken += available - occupants
        } else result.push(0)
      
        if (taken >= need) return result
    }

    return 'Not enough!'
}
