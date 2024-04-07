/*
Date of completion: 04-07-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

{                             {
  { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
  { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
  { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
}                             }
 

The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given an array of arrays containing letter representations of various liquid substances. The outer array may be empty.

-----

Return:

The function should return a new array of arrays. 

-----

Examples: 

separateLiquids([['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']])
        -> returns [['O', 'O', 'O', 'O',], ['W', 'W', 'W', 'W'], ['H', 'H', 'H', 'H']]

separateLiquids([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']])
        -> returns [['O', 'O', 'O', 'O'], ['A','A','A','A'], ['W','W','W','W',],['H','H','H','H',]]

separateLiquids([['A'],['H'],['W'],['O']])
        => returns [['O'],['A'],['W'],['H']]

------

Pseudo Code: 

function separateLiquids(glass) 
    chart <- object with liquid:density entries
    flat <- empty array

    for each row of glass
        push each element in row to flat array

    sorted <- sort flattened array based on chart value (ascending order)
    result <- empty glass array

    for each element of sorted
        row <- first index where array contains empty element
        slot <- first index where element in row is empty
        result[row][slot] = sorted[i]

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function separateLiquids(glass) {
    const chart = {'H': 1.36, 'W': 1, 'A': .87, 'O': .8}
    const flat = []

    glass.forEach(row => row.forEach(el => flat.push(el)))

    const sorted = flat.sort((a, b) => chart[a] - chart[b])
    const result = glass.map(row => row.map(el => el = ''))

    for (let i = 0; i < sorted.length; i++) {
        const row = result.findIndex(row => row.some(slot => slot === ''))
        const slot = result[row].findIndex(slot => slot === '')
        result[row][slot] = sorted[i]
    }

    return result

}