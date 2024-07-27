/*
Date of completion: 07-27-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
This has to work for any size of numbers sent in (after division, go back to addition, etc).
In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
Remember to also round the final answer to the nearest integer.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of numbers containing a letter, each number separated by a space

-----

Return:

A number as a result of the instruction's arithmetic

-----

Examples: 

"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

------

Pseudo Code: 

function doMath(string)
    array <- string split by space
    create new Map

    loop through array
        let letter = element split, find Index of NaN, then splice
        set letter in Map with element value

    sorted <- array of entries sorted by letter, then filtered for numbers

    reduce sorted


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function doMath(string) {
    const array = string.split(' ')
    const map = new Map()

    for (let num of array) {
        let numArr = num.split('')
        let indexOfLetter = numArr.findIndex(el => isNaN(+el))
        let letter = numArr.splice(indexOfLetter, 1)[0]
        if (!map.has(letter)) map.set(letter, [])
        let values = map.get(letter)
        values.push(+numArr.join(''))
        map.set(letter, values)
    }

    const sorted = Array.from(map.entries()).sort().map(e => e[1]).flat()
    let sum = sorted.shift()
    
    for (let i = 0; i < sorted.length; i++) {
      switch(i % 4) {
        case 0: sum += sorted[i]
          break
        case 1: sum -= sorted[i]
          break
        case 2: sum *= sorted[i]
          break
        case 3: sum /= sorted[i]
          break
      }
    }
  
    return Math.round(sum)
}
