/*
Date of completion: 06-17-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this kata you will be given a leaderboard of unique names for example:

['John',
 'Brian',
 'Jim',
 'Dave',
 'Fred']

Then you will be given a list of strings for example:

['Dave +1', 'Fred +4', 'Brian -1']

Then you sort the leaderboard.

The steps for our example would be:

# Dave up 1
['John',
 'Brian',
 'Dave',
 'Jim',
 'Fred']

# Fred up 4
['Fred',
 'John',
 'Brian',
 'Dave',
 'Jim']

# Brian down 1
['Fred',
 'John',
 'Dave',
 'Brian',
 'Jim']

Then once you have done this you need to return the leaderboard.

All inputs will be valid. All strings in the second list will never ask to move a name up higher or lower than possible eg. "John +3" could not be added to the end of the second input list in the example above.

The strings in the second list will always be something in the leaderboard followed by a space and a + or - sign followed by a number.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two arrays of strings

-----

Return:

A new array of sorted strings

-----

Examples: 

leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1'])
    returns ['Fred', 'John', 'Dave', 'Brian', 'Jim']

leaderboardSort(['Bob', 'Larry', 'Kevin', 'Jack', 'Max'], ['Max +3', 'Kevin -1', 'Kevin +3'])
    returns ['Bob', 'Kevin', 'Max', 'Larry', 'Jack']

------

Pseudo Code: 

function leaderboardSort(leaderboard, changes)
    loop through changes array
        [name, delta] = element split at empty space
        index <- index of name in leaderboard array
        newIndex <- index + delta
        splice current element from leaderboard
        insert name at new index in leaderboard

    return leaderboard

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function leaderboardSort(leaderboard, changes) {
    changes.forEach(element => {
        const [name, delta] = element.split(' ')
        const index = leaderboard.indexOf(name)
        const newIndex = index - +delta
        leaderboard.splice(index, 1)
        leaderboard.splice(newIndex, 0, name)
    })
    return leaderboard
}