/*
Date of completion: 04-08-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Build Tower Advanced
Build Tower by the following given arguments:

number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))
Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

  **
  **
  **
  **

Don't return a whole string containing line-endings but a list/array/vector of strings instead!

This kata might looks like a 5.5kyu one. So challenge yourself!

Go take a look at Build Tower which is a more basic version :)

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Number of floors as integer always above 0, and
An array of number pairs indicating width and height of blocks

-----

Return:

An array of strings

-----

Examples: 

for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]

------

Pseudo Code: 
 
function towerBuilder(nFloors, nBlockSz)
    create empty array
    create arrLen variable 
        -> nBlockSz[1] * nFloors
    create strLen variable to hold max length (width) of strings
        -> nBlockSz[0] * nFloors * 2 - nBlockSz[0]

    for loop up to arrLen times (max length of array)
        -> create string of asterisks: '*'.repeat(nBlockSz[0])

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function towerBuilder(nFloors, nBlockSz) {
  let result = [],
    asterisks = '*'.repeat(nBlockSz[0]),
    str = asterisks
  const strLen = nBlockSz[0] * nFloors * 2 - nBlockSz[0]

  for (let i = 0; i < nFloors; i++) {
    const padSize = strLen - str.length
    const padStartLen = Math.floor(padSize / 2)
    const padded = str
      .padStart(str.length + padStartLen, ' ')
      .padEnd(strLen, ' ')
    const arr = new Array(nBlockSz[1]).fill(padded)
    str += asterisks.repeat(2)
    result = result.concat(arr)
  }

  return result
}
