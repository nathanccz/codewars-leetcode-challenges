/*
Date of completion: 08-09-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

-----

Return:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

-----

Examples: 

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
  });

goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil'

goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field')

------

Pseudo Code: 

function goodVsEvil(good, evil)
    goodWorthArr <- array of good points
    evilWorthArr <- array of evil points

    const sumPoints <- function to reduce string to sum

    goodSum = sumPoints(good)
    evilSum = sumPoints(evil)

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function goodVsEvil(good, evil) {
    const goodWorthArr = [1, 2, 3, 3, 4, 10]
    const evilWorthArr = [1, 2, 2, 2, 3, 5, 10]

    const sumPoints = (str, arr) => {
        return str.split(' ').reduce((sum, curr, ind) => {
            sum += arr[ind] * +curr
            return sum
        }, 0)
    }

    const goodSum = sumPoints(good, goodWorthArr)
    const evilSum = sumPoints(evil, evilWorthArr)

    if (goodSum > evilSum) return "Battle Result: Good triumphs over Evil"
        else if (goodSum < evilSum) return "Battle Result: Evil eradicates all trace of Good"
        else return "Battle Result: No victor on this battle field"
}
