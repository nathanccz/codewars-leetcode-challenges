/*
Date of completion: 07-30-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a sorted array of numbers, return the summary of its ranges.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A sorted array of numbers

-----

Return:

An array of strings representing ranges

-----

Examples: 

summaryRanges([1, 2, 3, 4]) === ["1->4"]

summaryRanges([1, 1, 1, 1, 1]) === ["1"]

summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]


------

Pseudo Code: 
 
function summaryRanges(nums)
    result <- empty array
    currRange = [nums[0]]

    loop through nums
        if el - last el of currRange === 1, push el to currRange
        else if el === last el of currRange continue
        else 
            if currRange length is 1, push to result as String
            else push to result: first el of currRange and last el of currRange

    return result


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function summaryRanges(nums) {
    const setOfNums = Array.from(new Set(nums))

    let index = 0
    const grouped = setOfNums.reduce((acc, curr, ind) => {
        if (!acc[index]) acc[index] = []
        if (ind === 0) {
          acc[index][0] = curr
          return acc
        }
        if (curr - setOfNums[ind - 1] === 1) acc[index].push(curr)
          else {
            acc.push([curr])
            index++
          }
        return acc
    }, [])

    return grouped.map(e => e.length > 1 ? [e[0],e[e.length - 1]].join('->') : String(e))
}