/*
Date of completion: 07-19-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of numbers spelled out, separated by a space

-----

Return:

A new string of the average of the numbers in the parameter

-----

Examples: 

averageString("zero nine five two") -> "four"

averageString("four six two three") -> "three"

averageString("one two three four five") -> "three"

------

Pseudo Code: 
 
function averageString(str)

    array <- split str by space
    numbers <- nums one through nine in string, split into array
    sum <- 0

    if str is empty, or array has an element not in numbers, return "n/a"

    loop through array
        number <- index of number in numbers array
        add number to sum

    average <- The floor of sum / array length

    return numbers at index of average

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function averageString(str) {
    if (str.length === 0) return 'n/a'

    const array = str.split(' ')
    const numbers = "zero one two three four five six seven eight nine".split(' ')
    let sum = 0

    for (let num of array) {
        if (!numbers.includes(num)) return 'n/a'
        let number = numbers.indexOf(num)
        sum += number
    }

    const average = Math.floor(sum / array.length)

    return numbers[average]
}
