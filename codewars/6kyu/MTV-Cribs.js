/*
Date of completion: 10-4-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given n representing the number of floors build a beautiful multi-million dollar mansions like the ones in the example below:

     /\
    /  \
   /    \
  /______\  number of floors 3
  |      |
  |      |
  |______|

     /\
    /  \
   /____\
   |    |   2 floors
   |____|

     /\
    /__\    1 floor
    |__|

Note: whitespace should be preserved on both sides of the roof. Number of floors will go up to 30. There will be no tests with invalid input.

If you manage to complete it, you can try a harder version here.

Good luck! 

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number

-----

Return:

A string

-----

Examples: 

See description above. 

------

Pseudo Code: 

function myCrib(n)
    const roof = 


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function myCrib(n) {
    let roof = ' '.repeat(n) + '/\\' + ' '.repeat(n) + '\n',
        base = '' + '\n'

    for (let i = 1; i <= n; i++) {
        if (i === n) {
            roof += '/' + '_'.repeat(n * 2) + '\\'
            base += '|' + '_'.repeat(n * 2) + '|'
        } else {
            roof += ' '.repeat(n - i) + '/' + ' '.repeat(i * 2) + '\\' + ' '.repeat(n - i) + '\n'
            base += '|' + ' '.repeat(n * 2) + '|' + '\n'
        }
    }

    return roof + base
}